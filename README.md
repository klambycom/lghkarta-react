# Lghkarta.se

This application is organized according to this Medium post, https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1.

`src/` containse three directories `components`, `scenes`, and `services`.

* A component is a component.
* A scene is a page (component) of the application.
* Everything else is a service.

A component or scene can have nested components and services that can be used
by that component/scene, but no by other components/scenes.
