import { UniqueIdService } from './unique-id.service';
describe('UniqueIdService', ()  =>{
  it('#generateUniqueIdWithPrefix deve gerar um Id quando for chamado com um prefixo', () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-')
  });
});
