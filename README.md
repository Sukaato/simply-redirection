# auto-redirection ![version][img-version] [![license][img-license]][link-license] 
> A pure JS, easy redirection for your website !

[License][link-license] |
[Github][link-repo] |
[Author][link-author] |
[Site][link-site]

## Installation
In your project, in head of your html simply type :

```html
<script src="your_project_folder/src/js/redirection.js"></script>
<!-- or -->
<script src="https://gist.github.com/Sukaato/c3050455adb3483df6a52af9b9af88da.js"></script>
```

## Basic usage
```html
<!-- Redirecting to /lang/index.html -->
<script>new Redirection("fr-FR", "en-US").redirect("index.html")</script> 

<!-- or redirecting to /lang/index.html after 2 seconds -->
<script>new Redirection(["fr-FR", "en-US"]).redirect("index.html", 2)</script>

<!-- or redirecting to https://github/Sukaato -->
<script>new Redirection().redirect("https://github.com/Sukaato")</script>

<!-- or redirecting to https://github/Sukaato after 2 seconds -->
<script>new Redirection().redirect("https://github.com/Sukaato", 2)</script>
```

## Contributing
Big thank to [TheEmerio][link-emerio] to the new redirection system

Feel free to contribute to the project!

Please follow the [guidelines][link-contrib] when contributing!

## To do
The following features are not implemented yet:

- display the time before the redirection on the page

## License
This project is licensed under the [MIT License][link-license].

<!-- The links! -->
[link-license]: https://github.com/Sukaato/auto-redirection/blob/master/LICENSE
[link-repo]: https://github.com/TheEmrio/minecraft-js
[link-author]: https://github.com/Sukaato
[link-site]: https://sukaato.github.io/
[link-emerio]: https://github.com/TheEmerio
[link-contrib]: https://github.com/Sukaato/auto-redirection/blob/master/CONTRIBUTING.md

[img-version]: https://img.shields.io/badge/ver.-pre%20relase%200.2.2-blue
[img-license]: https://img.shields.io/npm/l/minecraft-lib.svg