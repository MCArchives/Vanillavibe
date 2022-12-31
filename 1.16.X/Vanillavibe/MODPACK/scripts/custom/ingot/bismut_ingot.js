//+----------------------------------------+
//�            Created by SZU              �
//+----------------------------------------+

onEvent("item.registry", event => {
  event.create('bismut_ingot').displayName('Bismut Ingot').type('basic').maxStackSize(64).group('misc');
});