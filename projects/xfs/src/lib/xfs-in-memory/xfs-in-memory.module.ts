import { Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { InMemoryXfsManager } from './in-memory-xfs-manager.class';
import { XfsHandler } from '../xfs-handler.class';
import { InMemoryXfsManagerImpl } from './in-memory-xfs-manager-impl.service';

export function xfsInMemoryXfsHandlerFactory(xfsManager: InMemoryXfsManager): XfsHandler {
  const result: any = new InMemoryXfsManagerImpl();
  return result as XfsHandler;
}

@NgModule({})
export class XfsInMemoryModule {

  static forRoot(xfsManager: Type<InMemoryXfsManager>): ModuleWithProviders {
    return {
      ngModule: XfsInMemoryModule,
      providers: [
        { provide: InMemoryXfsManager, useClass: xfsManager },
        { provide: XfsHandler,
          useFactory: xfsInMemoryXfsHandlerFactory,
          deps: [InMemoryXfsManager]
        }
      ]
    }
  }
}
