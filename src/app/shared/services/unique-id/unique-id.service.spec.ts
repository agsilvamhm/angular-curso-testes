import { UniqueIdService } from './unique-id.service';
describe(UniqueIdService.name, ()  =>{

  let service: UniqueIdService = null;
  

  beforeEach(()=>{
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} deve gerar um Id quando for chamado com um prefixo`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} deve verificar se não consta Ids duplicados`, () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++){
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(1000);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} deve exibir o número de ids gerados quando chamado`, () =>  {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} deve verificar quando chamado com um valor indefinido`, () =>{
    const emptyValues = [null, undefined,'', '0', '1'];
    emptyValues.forEach(emptyValues => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValues)).toThrow();
    })
  })
});
