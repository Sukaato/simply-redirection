# auto-redirection ![version][img-version] [![license][img-license]][link-license]
> Un JS pur, une redirection facile pour votre site web ! !

[License][link-license] |
[Github][link-repo] |
[Auteur][link-author] |
[Site][link-site]

Ce readme est disponible en : [Anglais][link-readme]

## Installation
Dans votre projet, dans le head de votre document html tapez simplement :

```html
<script src="your_project_folder/src/js/redirection.js"></script>
```

## Utilisation basique
```html
<!-- Redirection vers /lang/index.html -->
<script>new Redirection("fr-FR", "en-US").redirect("index.html")</script>

<!-- ou redirection vers /lang/index.html après 2 seconds -->
<script>new Redirection(["fr-FR", "en-US"]).redirect("index.html", 2)</script>

<!-- ou redirection vers https://github.com/Sukaato -->
<script>new Redirection().redirect("https://github.com/Sukaato")</script>

<!-- ou redirection vers https://github.com/Sukaato après 2 seconds -->
<script>new Redirection().redirect("https://github.com/Sukaato", 2)</script>
```

## Contribuer
Un grand merci à [TheEmrio][link-emrio] pour le nouveau système de redirection

N'hésitez pas à contribuer au projet !

Veuillez suivre les [directives][link-contrib] pour contribuer !

## À faire
Les fonctionnalités suivantes ne sont pas encore implémentées :

- afficher le temps avant la redirection sur la page

## License
Ce projet est sous licence [MIT License][link-license].

<!-- The links! -->
[link-license]: https://github.com/Sukaato/auto-redirection/blob/master/LICENSE
[link-repo]: https://github.com/TheEmrio/minecraft-js
[link-author]: https://github.com/Sukaato
[link-site]: https://sukaato.github.io/
[link-emrio]: https://github.com/TheEmrio
[link-contrib]: https://github.com/Sukaato/auto-redirection/blob/master/CONTRIBUTING.md
[link-readme]: https://github.com/Sukaato/auto-redirection/blob/master/README.md

[img-version]: https://img.shields.io/badge/ver.-pre%20relase%200.2.1-blue
[img-license]: https://img.shields.io/npm/l/minecraft-lib.svg
