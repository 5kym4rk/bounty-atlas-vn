import type { LearningModule } from '@/schemas/entities';
import { coreModules } from './core';
import { webApiIdentityModules } from './web-api-identity';
import { platformModules } from './platforms';
import { advancedModules } from './advanced';

export const modules: LearningModule[] = [
  ...coreModules,
  ...webApiIdentityModules,
  ...platformModules,
  ...advancedModules,
];
