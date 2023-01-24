export * from './interfaces'
import { StreamDefinition } from './interfaces'

import * as rdpx from './rdpx'
import * as ssov from './ssov'
export const streamConfigs: StreamDefinition[] = [ rdpx, ssov ]
