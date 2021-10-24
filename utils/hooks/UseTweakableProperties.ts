import { useExperienceDebug } from "@components/experience/ExperienceCanvas";
import { useDebug } from "@components/experience/ExperienceProvider";
import { useEffect, useState } from "react";
import { Pane, TpChangeEvent } from "tweakpane";
import { ITweakableProperties } from "./ITweakableProperties";
import { ITweakParent } from "./ITweakParent";

let pane: ITweakParent;

export const useTweakableProperties = <T extends ITweakableProperties>(properties: T, folderPath?: string, bridged?: boolean): T => {
  const [tweakableProperties, setTweakableProperties] = useState(properties);

  let debug: boolean;
  if (bridged === true) {
    debug = useExperienceDebug();
  } else {
    debug = useDebug();
  }

  useEffect(() => {
    if (!debug) {
      removePane();
      return;
    }

    const parent = getOrCreateParent();

    for (const prop in tweakableProperties) {
      const tweakValues = tweakableProperties[prop];
      parent.tweaks = parent.tweaks ?? [];

      if (!parent.tweaks.find(x => x.label === prop)) {
        parent.tweaks.push(parent.addInput(tweakValues, 'value', { ...tweakValues, label: prop }).on('change', (ev: TpChangeEvent) => {
          setTweakableProperties({ ...tweakableProperties, [prop]: { ...tweakValues, value: ev.value } })
        }));
      }
    }

    return removeTweaks;
  }, [debug]);

  const removeTweaks = () => {
    const parent = getOrCreateParent();
    parent.tweaks = parent.tweaks ?? [];

    for (const prop in tweakableProperties) {
      const currentTweak = parent.tweaks.find(x => x.label === prop);
      if (currentTweak) {
        currentTweak.dispose();
        parent.tweaks = parent.tweaks.filter(x => x.label !== prop);
        if (parent.tweaks.length === 0 && !parent.folders?.length) {
          parent.parent.folders = parent.parent.folders.filter(x => x.title !== folderPath.split('.')[folderPath.split('.').length - 1]);
          parent.dispose();
        }
      }
    }
  };

  const removePane = () => {
    if (pane) {
      pane.folders = [];
      pane.tweaks = [];
      pane.dispose();
      pane = null;
    }
  };

  const getOrCreateParent = (): ITweakParent => {
    pane = pane ?? new Pane() as any;
    let parent: ITweakParent = pane;

    if (folderPath) {
      let restOfPath = folderPath;
      do {
        let [currentFolderTitle, ...rest] = restOfPath.split('.');
        restOfPath = rest.join('.');

        parent.folders = parent.folders ?? [];

        let existingFolder = parent.folders.find(x => x.title === currentFolderTitle);
        if (!existingFolder) {
          parent.folders.push(parent.addFolder({ title: currentFolderTitle }));
        }

        const newParent = parent.folders.find(x => x.title === currentFolderTitle);
        newParent.parent = parent;
        parent = newParent;
      } while (restOfPath);
    }

    return parent;
  };

  return tweakableProperties;
}