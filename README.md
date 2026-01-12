# WorkLogs App (React Native with Expo)

This is a WorkLog app built with React Native using Expo. It allows users to create, read, update, and delete work-related private notes and store them using Appwrite. It also uses authentication through Appwrite to allow users to sign up and log in and create private notes.

<img src="/assets/images/screen.png" width="900">

## Usage

Install the dependencies:

```bash
npm install
```

You will need to sign into Appwrite and create a new project and database and fill in the required details in the `.env` file.

Run the app:

```bash
npm start
```

You can then run the app on an emulator or on your phone using the Expo Go app.

You can also use your browser by going to http://localhost:8081/.

Use EAS(Expo Application Services) to build your app for Android and iOS.

```bash
npm install -g eas-cli
eas login
eas init

# For Android
eas build --platform android

# For iOS
eas build --platform ios
```
