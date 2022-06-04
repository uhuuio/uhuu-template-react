# Uhuu Template React

An example uhuu template using react and vite.js.
> Requirement : Local server must run over HTTPS.

### Set up HTTPS for local development

Install mkcert (only once).
``` bash
brew install mkcert
brew install nss # if you use Firefox
mkcert -install
```

Generate a certificate for your localhost, signed by mkcert
``` bash
mkdir -p .cert && mkcert -key-file ./.cert/key.pem -cert-file ./.cert/cert.pem 'localhost'
```

Copy .env.sample to .env to provide paths to certificates
``` bash
cp .env.sample .env
```

or modify vite.config.js to set certificate locations.

``` js
const keyPath = './.cert/key.pem';
const certPath = './.cert/cert.pem';
```

### Install dependencies

``` bash
npm install
````

### Start dev server
``` bash
npm run dev
```

### Build template
Each time you build a template, `dist/uhuu.zip` file is created. Upload .zip file to app.uhuu.io as new template.
``` bash
npm run build
```

### Concurrently develop and build
Run dev server and in parallel watch file changes and build new dist/uhuu.zip file.
``` bash
npm run uhuu
```

## Links
- [Get started with uhuu SDK](https://developer.uhuu.io/get-started-with-uhuu-sdk)
- [Run local server over https](https://developer.uhuu.io/how-to/vite-local-https)
- [Visit app.uhuu.io](https://app.uhuu.io)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

