import { Global, Module } from '@nestjs/common';
import { GenericController } from './controller';
import { GenericService } from './service';

@Global() // opcional, mas torna disponível globalmente
@Module({
  providers: [GenericService],
  exports: [GenericService],
  controllers: [GenericController],
})
export class GenericsModule {}
