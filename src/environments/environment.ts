// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyALh4oQfqy4VXDyKRCXB8--7_NNEK-Q0HY",
   authDomain: "my-awesome-note.firebaseapp.com",
   databaseURL: "https://my-awesome-note.firebaseio.com",
   projectId: "my-awesome-note",
   storageBucket: "my-awesome-note.appspot.com",
   messagingSenderId: "1067273660013"
 }
};
