ちーとしーと


https://github.com/ngrx/platform/tree/master/docs/schematics


```sh
# redux
ng g module core-data --flat false

ng g @ngrx/schematics:store core-data/main -m core-data.module.ts
ng g @ngrx/schematics:reducer core-data/main --reducers reducers/index.ts
ng g @ngrx/schematics:effect core-data/main -m core-data
ng g @ngrx/schematics:action core-data/main
```

https://github.com/angular/angular-cli/wiki/stories-create-library

```sh
# API
ng g lib backend
ng g service scool/scool --project backend
npm run build backend
npm instll dist/backend
```