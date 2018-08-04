import { Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { InMemoryXfsManager } from './in-memory-xfs-manager.class';
import { XfsHandler } from '../xfs-handler.class';

export function xfsInMemoryXfsHandlerFactory(xfsManager: InMemoryXfsManager): XfsHandler {
  const result: any = null;
  return result;
}

@NgModule({})
export class XfsInMemoryModule {

  static forRoot(xfsManager: Type<InMemoryXfsManager>): ModuleWithProviders {
    return {
      ngModule: XfsInMemoryModule,
      providers: [
        { provide: XfsHandler,
          useFactory: xfsInMemoryXfsHandlerFactory,
          deps: [InMemoryXfsManager]
        }
      ]
    }
  }
}
