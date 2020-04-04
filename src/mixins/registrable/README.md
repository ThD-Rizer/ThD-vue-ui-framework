# Registrable mixin

This mixin can create mixins for two different entities:
* Provider
* Injectable child (will be registered into provider)

#### Provider factory

Creates mixin for provider with `register` and `unregister` methods

#### Injectable child factory

Creates mixin for children which could be injected into provider through `regiter` and `unregiter` methods
