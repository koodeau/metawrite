<p align="center">
  <img alt="Metawrite" src="static/logo.svg" />
</p>

<a href="https://www.npmjs.com/package/metawrite">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
</a>

<a href="https://classic.yarnpkg.com/en/package/metawrite">
  <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" />
</a>

# Support Us 

**Get free $100 credits on DigitalOcean:**

<a href="https://m.do.co/c/843c1f24ad90">
  <img src="https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=DigitalOcean&logoColor=white" />
</a>

**Join our Discord:**

<a href="https://discord.gg/n3WZxtbkCm">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
</a>

---

[![npm Package](https://github.com/koodeau/metawrite/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/koodeau/metawrite/actions/workflows/npm-publish.yml) 

Metawrite is [Appwrite](https://appwrite.io/) SDK with ready to go components for `Svelte` / `SvelteKit`

This package is maintained by [Increasio](https://increas.io).

> Note: versions `x.x.n` neans some minor changes to package documentation or typings.
> 
> versions `x.n.x` might include some minor breaking changes. See [Release Notes](https://github.com/koodeau/metawrite/blob/main/CHANGELOG.md).
> 
> versions `n.x.x` might include some major breaking changes. See [Release Notes](https://github.com/koodeau/metawrite/blob/main/CHANGELOG.md).

## Important info

The package is fully working and compatible with Appwrite Server 0.12, Web SDK 6, and SvelteKit. But people are currently facing difficulties with `npm install metawrite`. We have ready and configured [**SvelteKit template**](https://github.com/koodeau/sveltekit-metawrite) that uses Metawrite and could be also used as Docker image like described [here](https://github.com/koodeau/sveltekit-metawrite#appwrite-and-sveltekit-combo).

> Please consider using [template](https://github.com/koodeau/sveltekit-metawrite), this is temporary 

# Documentation

### Installation

Using NPM:

```bash
npm install metawrite
```

Using Yarn:

```bash
yarn add metawrite
```

# Table of contents

- [Support Us](#support-us)
	- [Important info](#important-info)
- [Documentation](#documentation)
		- [Installation](#installation)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
	- [Initialize](#initialize)
		- [Properties](#properties)
	- [Create user](#create-user)
		- [Directives](#directives)
			- [Arguments](#arguments)
		- [Events](#events)
			- [Arguments](#arguments-1)
			- [Arguments](#arguments-2)
	- [Login via Email](#login-via-email)
		- [Directives](#directives-1)
			- [Arguments](#arguments-3)
		- [Events](#events-1)
			- [Arguments](#arguments-4)
			- [Arguments](#arguments-5)
	- [Login via OAuth2](#login-via-oauth2)
		- [Properties](#properties-1)
		- [Directives](#directives-2)
	- [Get user](#get-user)
		- [Directives](#directives-3)
	- [Get Collection](#get-collection)
		- [Properties](#properties-2)
		- [Directives](#directives-4)
			- [Arguments](#arguments-6)
	- [Get Document](#get-document)
		- [Properties](#properties-3)
		- [Directives](#directives-5)
			- [Arguments](#arguments-7)
		- [Events](#events-2)
- [API](#api)
	- [Account](#account)
		- [`<User />`](#user-)
			- [Slots](#slots)
			- [Directives](#directives-6)
			- [Events](#events-3)
			- [Example](#example)
		- [`<Create />`](#create-)
			- [Directives](#directives-7)
			- [Events](#events-4)
			- [Example](#example-1)
		- [`<Delete />`](#delete-)
			- [Directives](#directives-8)
			- [Events](#events-5)
			- [Example](#example-2)
		- [`<Preferences />`](#preferences-)
			- [Slots](#slots-1)
			- [Directives](#directives-9)
			- [Events](#events-6)
			- [Example](#example-3)
		- [`<RecoverPassword />`](#recoverpassword-)
			- [Directives](#directives-10)
			- [Events](#events-7)
			- [Example](#example-4)
		- [`<Update />`](#update-)
			- [Directives](#directives-11)
			- [Events](#events-8)
			- [Example](#example-5)
		- [`<Verification />`](#verification-)
			- [Directives](#directives-12)
			- [Events](#events-9)
			- [Example](#example-6)
	- [Auth](#auth)
		- [`<AuthEmail />`](#authemail-)
			- [Slots](#slots-2)
			- [Directives](#directives-13)
			- [Events](#events-10)
			- [Example](#example-7)
		- [`<AuthOAuth2 />`](#authoauth2-)
			- [Properties](#properties-4)
			- [Example](#example-8)
		- [`<CreateAnonymousSession />`](#createanonymoussession-)
			- [Directives](#directives-14)
			- [Example](#example-9)
		- [`<CreateJWT />`](#createjwt-)
			- [Directives](#directives-15)
			- [Example](#example-10)
		- [`<MagicURL />`](#magicurl-)
			- [Directives](#directives-16)
			- [Example](#example-11)
	- [Avatars](#avatars)
		- [`<Browser />`](#browser-)
			- [Arguments](#arguments-8)
			- [Directives](#directives-17)
			- [Example](#example-12)
		- [`<CreditCard />`](#creditcard-)
			- [Arguments](#arguments-9)
			- [Directives](#directives-18)
			- [Example](#example-13)
		- [`<Favicon />`](#favicon-)
			- [Arguments](#arguments-10)
			- [Directives](#directives-19)
		- [`<Flag />`](#flag-)
			- [Arguments](#arguments-11)
			- [Directives](#directives-20)
			- [Example](#example-14)
		- [`<Image />`](#image-)
			- [Arguments](#arguments-12)
			- [Directives](#directives-21)
			- [Example](#example-15)
		- [`<QR />`](#qr-)
			- [Arguments](#arguments-13)
			- [Directives](#directives-22)
			- [Example](#example-16)
	- [Database](#database)
		- [`<Collection />`](#collection-)
			- [Arguments](#arguments-14)
			- [Slots](#slots-3)
			- [Directives](#directives-23)
			- [Example](#example-17)
		- [`<Document />`](#document-)
			- [Arguments](#arguments-15)
			- [Slots](#slots-4)
			- [Directives](#directives-24)
			- [Example](#example-18)
	- [Realtime](#realtime)
			- [Arguments](#arguments-16)
			- [Directives](#directives-25)
			- [Example](#example-19)
	- [Storage](#storage)
		- [`<Storage />`](#storage-)
			- [Directives](#directives-26)
			- [Example](#example-20)
		- [`<FileList />`](#filelist-)
			- [Arguments](#arguments-17)
			- [Slots](#slots-5)
			- [Directives](#directives-27)
			- [Example](#example-21)
		- [`<File />`](#file-)
			- [Arguments](#arguments-18)
			- [Directives](#directives-28)
			- [Example](#example-22)
	- [Functions](#functions)
		- [`<Function />`](#function-)
			- [Directives](#directives-29)
			- [Slots](#slots-6)
			- [Example](#example-23)
	- [Locale](#locale)
		- [`<Continents />`](#continents-)
			- [Directives](#directives-30)
			- [Slots](#slots-7)
			- [Example](#example-24)
		- [`<Countries />`](#countries-)
			- [Arguments](#arguments-19)
			- [Slots](#slots-8)
			- [Directives](#directives-31)
			- [Example](#example-25)
		- [`<Currencies />`](#currencies-)
			- [Slots](#slots-9)
			- [Directives](#directives-32)
			- [Example](#example-26)
		- [`<Languages />`](#languages-)
			- [Slots](#slots-10)
			- [Directives](#directives-33)
			- [Example](#example-27)
		- [`<Locale />`](#locale-)
			- [Slots](#slots-11)
			- [Directives](#directives-34)
			- [Example](#example-28)
		- [`<PhoneCodes />`](#phonecodes-)
			- [Slots](#slots-12)
			- [Directives](#directives-35)
			- [Example](#example-29)
- [Stack](#stack)

# Usage

> You need a running instance of Appwrite to use this library. Go to https://appwrite.io/docs/installation for more instructions.

**Psuedo Example**

Handle multiple levels of async relational data (and their loading & fallback states) entirely from the Svelte markup.

```svelte
<!-- 1. 💪 Appwrite App -->
<Appwrite {...config}>

    <!-- 2. 😀 Get the current user if logged in -->
    <User let:user>

        <h1>Hello {user.name}!</h1>

        <!-- 3. 📚 Get all the documents from a collection -->
        <Collection collectionId="5f56a3035a01f" let:documents>
            You have {documents.length} documents.

            {#each documents as document}

                <!-- 4. 📜 Get a document -->
                <Document collectionId="5f56a3035a01f" documentId={document.$id} {document}>
                    Title: {document.title}
                    Text: {document.text}
...
```

## Initialize

Must be initialised and wrap every `metawrite` component.

```svelte
<script>
	import { Appwrite } from 'metawrite';

	const config = {
		endpoint: 'http://localhost/v1',
		project: 'demo',
		locale: 'fr'
	};
</script>

<Appwrite {...config}>...</Appwrite>
```

### Properties

| Name       | Description                                     |
| ---------- | ----------------------------------------------- |
| `endpoint` | Your Appwrite endpoint. `@type - {string}`      |
| `project`  | Your project ID. `@type - {string}`             |
| `locale`   | _Optional_ The users locale. `@type - {string}` |
| `realtime`   | _Optional_ Set Custom realtime endpoint. By default the same as `endpoint`. `@type - {string}` |

## Create user

Registers a new account.

```svelte
<script>
	import { Create } from 'metawrite';

	let email = '';
	let password = '';
	let name = '';

	const success = (e) => {
		//success callback
		// `e` contains the user object
	};

	const failure = (e) => {
		//failure callback
	};
</script>

<Create let:actions on:success on:failure>
	<input type="text" bind:value={email} />
	<input type="password" bind:value={password} />
	<input type="text" bind:value={name} />
	<button on:click={actions.create(email, password, name)}>Register</button>
</Create>
```

### Directives

**let:actions** `object`

Object with function.

#### Arguments

| Name                            | Description                              |
| ------------------------------- | ---------------------------------------- |
| `create(email, password, name)` | Registers a new user. `@type - {string}` |

### Events

**on:success**

Triggers on successful register.

#### Arguments

| Name       | Description |
| ---------- | ----------- |
| `response` | Response    |

**on:failure**

Triggers on failed register.

#### Arguments

| Name       | Description |
| ---------- | ----------- |
| `response` | Response    |

## Login via Email

Login via email and password.

```svelte
<script>
	import { AuthEmail } from 'metawrite';

	let email = '';
	let password = '';

	const success = (e) => {
		//success callback
		// `e` contains the user object
	};

	const failure = (e) => {
		//failure callback
	};
</script>

<AuthEmail let:authorize on:success on:failure>
	<input type="text" bind:value={email} />
	<input type="text" bind:value={password} />
	<button on:click={authorize(email, password)}>Login</button>
</AuthEmail>
```

### Directives

**let:authorize** `function`

Initiates login.

#### Arguments

| Name       | Description                  |
| ---------- | ---------------------------- |
| `email`    | E-Mail. `@type - {string}`   |
| `password` | Password. `@type - {string}` |

### Events

**on:success**

Triggers on successful login.

#### Arguments

| Name    | Description                |
| ------- | -------------------------- |
| `email` | E-Mail. `@type - {string}` |

**on:failure**

Triggers on failed login.

#### Arguments

| Name    | Description   |
| ------- | ------------- |
| `error` | Error object. |

## Login via OAuth2

Login via an OAuth2 provider.

```svelte
<script>
	import { AuthOAuth2 } from 'metawrite';
</script>

<AuthOAuth2
	provider="google"
	success="http://localhost:3000?success"
	failure="http://localhost:3000?failure"
	let:authorize
>
	<button on:click={authorize}>Login Google</button>
</AuthOAuth2>
```

### Properties

| Name       | Description                         |
| ---------- | ----------------------------------- |
| `provider` | OAuth2 provider. `@type - {string}` |
| `success`  | Success url. `@type - {string}`     |
| `failure`  | Failure url. `@type - {string}`     |

### Directives

**let:authorize** `function`

## Get user

Requests current user to check if logged in.

```svelte
<script>
	import { User } from 'metawrite';
</script>

<User let:user>
	<h1>Hello {user.name}!</h1>
	<div>{user.email}</div>

	<div slot="error">You are not logged in!</div>
</User>
```

### Directives

**let:user** `object`

Get currently logged in user data.

## Get Collection

Get a list of all the documents from a collection.

```svelte
<script>
	import { Collection } from 'metawrite';
</script>

<Collection collectionId="5f56a3035a01f" let:documents>
	You have {documents.length} documents.
</Collection>
```

### Properties

| Name           | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `collectionId` | Collection unique ID. `@type - {string}`                               |
| _additional_   | same as [here](https://appwrite.io/docs/client/database#listDocuments) |

### Directives

**let:documents** `array`

Array of documents.

**let:actions** `object`

Object with function.

#### Arguments

| Name                        | Description                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `reload()`                  | Re-fetch collection.                                                                                                                               |
| `create(data, read, write)` | Create a new Document in the collection. `read`/`write` is optional and current user by default `@type - {string[]}`. `data` is `@type - {string}` |

## Get Document

Get a document. If you pass the `document` property with data from <Collection />, there wont be any data requested.

```svelte
<script>
	import { Document } from 'metawrite';
</script>

<Document documentId="5f56a3asda01f" let:document>
	Title: {document.title}
	Text: {document.text}
</Document>
```

### Properties

| Name           | Description                              |
| -------------- | ---------------------------------------- |
| `documentId`   | Document unique ID. `@type - {string}`   |
| `collectionId` | Collection unique ID. `@type - {string}` |
| or             |                                          |
| `document`     | Document passed from `<Collection />`    |

### Directives

**let:document** `object`

A JSON object with the document data.

**let:actions** `object`

Object with function.

#### Arguments

| Name           | Description                                       |
| -------------- | ------------------------------------------------- |
| `update(data)` | Update the document. `data` is `@type - {string}` |
| `remove()`     | Deletes the document.                             |
| `reload()`     | Re-fetch document.                                |

### Events

**on:change**

Triggers on update or remove login.

# API

## Account

The Account components allow you to manage a user account.

### `<User />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `logout()` | Logout current session. |
| `logoutAll()` | Logout from all session. |
| `logoutFrom(session)` | Logout from specific session. `session` is `@type - {string}` |

- **let:user** `object`
- **let:error**

#### Events

- **on:success** On user fetch success.
- **on:failure** On user fetch failure.
- **on:successLogout** On `logout` success.
- **on:failureLogout** On `logout` failure.
- **on:successLogoutFrom** On `logoutFrom` success.
- **on:failureLogoutFrom** On `logoutFrom` failure.
- **on:successLogoutAll** On `logoutAll` success.
- **on:failureLogoutAll** On `logoutAll` failure.

#### Example

```svelte
<script>
	import { User } from 'metawrite';
</script>

<User let:actions let:user>
	<button on:click={actions.reload()}>Reload user data</button>
	<button on:click={actions.get()}>Get logged in user data</button>
	<button on:click={actions.logout()}>Log out from current session</button>
	<button on:click={actions.logoutFrom('sessionId')}>Log out from specific session</button>
	<button on:click={actions.logoutAll()}>Log out from all sessions</button>

	<!-- If logged in -->
	<p>Hi, {user.name}</p>
</User>
```

### `<Create />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(email, password, name)` | Creates a user. `email` and `password` are required - `@type - {string}`. `name` is _optional_ - `@type - {string}` |

#### Events

- **on:success** On `create` success.
- **on:failure** On `create` failure.

#### Example

```svelte
<script>
	import { Create } from 'metawrite';

	let name,
		email,
		password = '';

	const success = (e) => {
		// success callback
		// `e` contains the user object
	};

	const failure = (e) => {
		// failure callback
	};
</script>

<Create let:actions on:success on:failure>
	<input type="text" name="name" placeholder="name" bind:value={name} />
	<input type="text" name="email" placeholder="email" bind:value={email} />
	<input type="password" name="password" placeholder="password" bind:value={password} />
	<button on:click={actions.create(name, email, password)}>Create Account</button>
</Create>
```

### `<Delete />`

Deletes currently logged in user's account.

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `delete()` | Deletes currently logged in user. |

#### Events

- **on:success** On `delete` success.
- **on:failure** On `delete` failure.

#### Example

```svelte
<script>
	import { Delete } from 'metawrite';

	const success = (e) => {
		//success callback
		// `e` contains the user object
	};

	const failure = (e) => {
		//failure callback
	};
</script>

<Delete let:actions on:success on:failure>
	<button on:click={actions.delete}>Delete my account</button>
</Delete>
```

### `<Preferences />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reloads preferences. |
| `update(prefs)` | Update preferences. `prefs` - `@type - {object}` |

#### Events

- **on:success** On init and `reload` success.
- **on:failure** On init and `reload` failure.
- **on:successUpdate** On `update` success.
- **on:failureUpdate** On `update` failure.

#### Example

```svelte
<script>
	import { Preferences } from 'metawrite';

	let prefs = {
		// You can pass only the specific settings you wish to update.
	};
</script>

<Preferences let:actions>
	<button
		on:click={() => {
			actions.update(prefs);
			actions.reload();
		}}>Update Preferences</button
	>
</Preferences>
```

### `<RecoverPassword />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `recover(email, url)` | Recover password. `email` and `url` is required and `@type - {string}`. `url` is your page where you will handle `secret` with `complete` function. |
| `complete(user, secret, password, passwordAgain)` | Complete password recovery. `user` and `secret` are set automatically by `metawrite`, so you don’t have to set them. `password` and `passwordAgain` are required - `@type - {string}`. |

#### Events

- **on:successRecover** On init and `reload` success.
- **on:failureRecover** On init and `reload` failure.
- **on:successComplete** On `update` success.
- **on:failureComplete** On `update` failure.

#### Example

```svelte
<script>
    import { RecoverPassword } from "metawrite";

    const url = "http://localhost:3000/reset-password"; // URL that will point to the next step.
    let email = '';

    const successRecover = e => {
    //success callback
    // `e` contains the user object
  };

  const failureRecover = e => {
    //failure callback
  }
</script>

<!-- localhost/forgot-password -->
<RecoverPassword let:actions on:successRecover on:failureRecover>
    <input name="email" type="text" bind:value={email, url} placeholder="Email" />
    <button on:click{actions.recover(email)}>Recover Password</button>
</RecoverPassword>

<!-- Then on localhost/reset-password  -->
<script>
    import { RecoverPassword } from "metawrite";

    let password, passwordAgain = '';

    const successComplete = e => {
    //success callback
    // `e` contains the user object
  };

  const failureComplete = e => {
    //failure callback
  }
</script>

<RecoverPassword let:actions on:successComplete on:failureComplete>
    <input type="password" name="password" bind:value{password} placeholder="Password" />
    <input type="password" name="password" bind:value{passwordAgain} placeholder="Confirm Password" />
    <button on:click{actions.complete(password, passwordAgain)}>Set New Password</button>
</RecoverPassword>
```

### `<Update />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `name(name)` | Update name. All fields are required. `@type - {string}` |
| `email(email, password)` | Update email. All fields are required. `@type - {string}` |
| `password(password, oldPassword)` | Update password. All fields are required. `@type - {string}` |

#### Events

- **on:successName** On `name` success.
- **on:failureName** On `name` failure.
- **on:successEmail** On `email` success.
- **on:failureEmail** On `email` failure.
- **on:successPassword** On `password` success.
- **on:failurePassword** On `password` failure.

#### Example

```svelte
<script>
	import { Update } from 'metawrite';

	let name,
		email,
		password,
		newPassword,
		oldPassword = '';
</script>

<Update let:actions>
	<button on:click={actions.name(name)}>This updates name</button>
	<button on:click={actions.email(email, password)}>This updates email</button>
	<button on:click={actions.password(newPassword, oldPassword)}>This updates password</button>
</Update>
```

### `<Verification />`

Creates and automatically validates user email verification.

- `url` of type string for action `create` should be where your app is hosted or `localhost`.
- For `update` action you don't need to pass anything, the process is automated.

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(url)` | Create Verification. `url` is what URL used to create verification link sent to your email inbox. `@type - {string}` |
| `update(user, secret)` | Complete Verification. `user` and `secret` are set automatically by `metawrite`. |

#### Events

- **on:successCreate** On `create` success.
- **on:failureCreate** On `create` failure.
- **on:successComplete** On `complete` success.
- **on:failureComplete** On `complete` failure.

#### Example

```svelte
<script>
	import { Verification } from 'metawrite';

	const url = window.location.href;
</script>

<Verification let:actions>
	<button on:click={actions.create(url)} />
	<button on:click={actions.update()}>Update email verification status</button>
</Verification>
```

## Auth

The Auth components allow you to authenticate a user account.

### `<AuthEmail />`

#### Slots

- **loading**
- **success**
- **error**

#### Directives

- **let:authorize(email, password)**
- **let:user**
- **let:error**

#### Events

- **on:success** On `authorize` success.
- **on:failure** On `authorize` failure.

#### Example

```svelte
<script>
	import { AuthEmail } from 'metawrite';

	let email = '';
	let password = '';

	const success = (e) => {
		//success callback
		// `e` contains the user object
	};

	const failure = (e) => {
		//failure callback
	};
</script>

<AuthEmail let:authorize on:success on:failure>
	<input type="text" bind:value={email} />
	<input type="text" bind:value={password} />
	<button on:click={authorize(email, password)}>Login</button>
</AuthEmail>
```

### `<AuthOAuth2 />`

#### Properties

| Name            | Description                         |
| --------------- | ----------------------------------- |
| `provider`      | OAuth2 provider. `@type - {string}` |
| `success`       | Success url. `@type - {string}`     |
| `failure`       | Failure url. `@type - {string}`     |
| #### Directives |                                     |

**let:authorize()**

#### Example

```svelte
<script>
	import { AuthOAuth2 } from 'metawrite';
</script>

<AuthOAuth2
	provider="google"
	success="http://localhost:3000?success"
	failure="http://localhost:3000?failure"
	let:authorize
>
	<button on:click={authorize}>Login Google</button>
</AuthOAuth2>
```

### `<CreateAnonymousSession />`

#### Directives

**let:actions**

| Name       | Description                |
| ---------- | -------------------------- |
| `create()` | Creates anonymous session. |

#### Example

```svelte
<script>
	import { CreateAnonymousSession } from 'metawrite';
</script>

<CreateAnonymousSession let:actions>
	<button on:click={actions.create}>Create Anonymous Session</button>
</CreateAnonymousSession>
```

### `<CreateJWT />`

Creates JWT token.

#### Directives

**let:actions**

| Name       | Description        |
| ---------- | ------------------ |
| `create()` | Creates JWT token. |

#### Example

```svelte
<script>
	import { CreateJWT } from 'metawrite';
</script>

<CreateJWT let:actions>
	<button on:click={actions.create}>Create JWT token</button>
</CreateJWT>
```

### `<MagicURL />`

Creates Magic URL Session and stores session information.

#### Directives

**let:actions**

| Name       | Description                |
| ---------- | -------------------------- |
| `create(email, url)` | Creates Magic URL Session. email is required, url is to point on complete step `string` |
| `complete()` | Automatically validates url info and completes Magic URL Session. |

#### Example

```svelte
<script>
<script>
    import { MagicURL } from "metawrite";

    const userId = "32h2hj24h2"
    let email = ""
    const url = "http://localhost:3000/page-to-complete"

	const successCreate = (e) => {
		console.log(e)
	}
	const failureCreate = (e) => {
		console.log(e)
	}
	const successComplete = (e) => {
		console.log(e)
	}
	const failureComplete = (e) => {
		console.log(e)
	}
</script>

<MagicURL let:actions on:successCreate on:successComplete on:failureCreate on:failureComplete>
		<input type="email" name="email" placeholder="Email" bind:value={email} />
		<button on:click={actions.create(userId, email, url)}>Send login link</button>
		<button on:click={actions.complete()}>Confirm Login</button>
</MagicURL>
```

## Avatars

The Avatar components aim to help you complete everyday tasks related to your app image, icons, and avatars.

### `<Browser />`

#### Arguments

- code - _required_ `@type - {string}`
- width - _optional_ `@type - {number}`
- height - _optional_ `@type - {string}`
- quality - _optional_ `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
	import { Browser } from 'metawrite';
</script>

<Browser code="firefox" let:src>
	<img src={String(src)} alt="Browser" />
</Browser>
```

### `<CreditCard />`

#### Arguments

- code - _required_ `@type - {string}`
- width - _optional_ `@type - {number}`
- height - _optional_ `@type - {string}`
- quality - _optional_ `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
	import { CreditCard } from 'metawrite';
</script>

<CreditCard code="amex" let:src>
	<img src={String(src)} alt="card" />
</CreditCard>
```

### `<Favicon />`

#### Arguments

- url - _required_ `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

```svelte
<script>
	import { Favicon } from 'metawrite';
	const url = window.location.href;
</script>

<Favicon {url} let:src>
	<img src={String(src)} alt="favicon" />
</Favicon>
```

### `<Flag />`

#### Arguments

- code - _required_ `@type - {string}`
- width - _optional_ `@type - {number}`
- height - _optional_ `@type - {string}`
- quality - _optional_ `@type - {string}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
	import { Flag } from 'metawrite';
</script>

<Flag code="canada" let:src>
	<img src={String(src)} alt="flag" />
</Flag>
```

### `<Image />`

#### Arguments

- url - _required_ `@type - {string}`
- width - _optional_ `@type - {number}`
- height - _optional_ `@type - {number}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
	import { Image } from 'metawrite';

	let url = 'https://increas.io/';
	let width,
		height = 100;
</script>

<Image {url} {width} {height} let:src>
	<img src={String(src)} alt="someImage" />
</Image>
```

### `<QR />`

#### Arguments

- text - _required_ `@type - {string}`
- size - _optional_ `@type - {optional}`
- margin - _optional_ `@type - {number}`
- download - _optional_ `@type - {boolean}`

#### Directives

- **let:src** Image link `@type - {URL}`

#### Example

```svelte
<script>
	import { QR } from 'metawrite';

	let text = 'https://increas.io/'; // could be any text
	let size = 500;
	let margin = 1;
	let download = false;
</script>

<QR {text} {size} {margin} {download} let:src>
	<img src={String(src)} alt="QR Code" />
</QR>
```

## Database

The Database components allow you to create structured collections of documents, query and filter lists of documents, and manage an advanced set of read and write access permissions.

### `<Collection />`

#### Arguments

- collectionId - *required* `@type - {string}`

- cache - *optional*, by default set to false `@type - {boolean}`

  **query: `@type - {object}`**

- queries - *optional* `@type - {string[]}`

- limit - *optional* `@type - {number}`

- offset - *optional* `@type - {number}`

- cursor - *optional* `@type - {string}`

- cursorDirection - *optional* `@type - {string}`

- orderAttributes - *optional* `@type - {string[]}`

- orderTypes - *optional* `@type - {string[]}`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `create(documentId, data, read, write)` | Creates a Document. `data` - `@type - {string}`.<br /> `read`/`write` is optional `@type - {string[]}`.<br />`documentId` is optional, by default generates unique `@type - {string}`. |

- **let:documents**
- **let:error**

#### Example 

```svelte
<script>
  import { Collection } from "metawrite";
</script>

<Collection collectionId="5f56a3035a01f" let:documents>
  You have {documents.length} documents.
</Collection>
```

### `<Document />`

#### Arguments

- documentId - _required_ `@type - {string}`
- collectionId - _required_ `@type - {string}`
- document - `Promise<any>`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `update(data)` | Updates a Document. `data` - `@type - {object}` |
| `remove()` | Removes a Document. |

- **let:document**
- **let:error**

#### Example

```svelte
<script>
	import { Collection, Document } from 'metawrite';

	const collectionId = '5f56a3035a01f';
</script>

<Collection {collectionId} let:documents>
	You have {documents.length} documents:
	{#each documents as document}
		<Document {collectionId} documentId={document.$id} {document}>
			Title: {document.title}
			Text: {document.text}
		</Document>
	{/each}
</Collection>
```

## Realtime

For more information about using Realtime in Appwrite see [Realtime documentation](https://appwrite.io/docs/realtime).

Realtime allows you to listen to any events on the server-side in realtime using the subscribe method.

Instead of requesting new data via HTTP, the subscription will receive new data every time it changes, any connected client receives that update within milliseconds via a WebSocket connection.

This lets you build an interactive and responsive user experience by providing information from all of Appwrite's services in realtime.

#### Arguments

- channels - *required* `string | string[]`

#### Directives

**let:payload** - The payload from the subscription will contain [following properties](https://appwrite.io/docs/realtime#payload).

**let:actions**
| Name | Description |
| --- | --- |
| `subscribe()` | Subscribing to all updates related to one or more channels. |
| `unsubscribe()` | If you no longer want to receive updates from a subscription, you can unsubscribe so that your callbacks are no longer called. |

#### Example 

```svelte
<script>
	import { Realtime } from 'metawrite';
</script>

<Realtime channels="account" let:actions let:payload>
	<h1>{payload.timestamp}</h1>
	<button on:click={actions.subscribe()}>Subscribe to Account channel</button>
	<button on:click={actions.unsubscribe()}>Unsubscribe from Account channel</button>
</Realtime>
```

## Storage

The Storage components allow you to manage your project files. You can upload, view, download, and query all your project files.

### `<Storage />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(bucketId, fileId, file, read, write)` | Uploads a file. <br />`fileId` is required `@type - {string}`, `"unique()"` will generate random unique id, but you can use custom.<br />`file` is `@type - {File}` and required.<br />`read`/`write` is `@type - {string[]}` and *optional* |

#### Example

```svelte
<script lang="ts">
    import { Storage } from "metawrite"

    // Required
	let bucketId = "default"
    let file: File;
    let fileId = "unique()"; // this will generate random unique id, but you can use custom

    // Optional
    let read: string[];
    let write: string[];
</script>

<Storage {file} let:actions>
    <button on:click={actions.create(bucketId, fileId, file, read, write)}>Upload File</button>
</Storage>
```

### `<FileList />`

#### Arguments

- bucketId - *required* `@type - {string}`
- search - *optional* `@type - {string}`
- limit - *optional* `@type - {number}`
- offset - *optional* `@type - {number}`
- cursor - *optional* `@type - {string}`
- cursorDirection - *optional* `@type - {string}`
- orderType - *optional* `@type - {string} ` => write  `"ASC"` or `"DESC"`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:files**
- **let:error**

#### Example 

```svelte
<script>
    import { FileList } from "metawrite"

    // Optional
    let bucketId = 'default';
    let search = '';
    let limit = 10;
    let offset = 0;
    let orderType = 'ASC';
</script>

<FileList {bucketId} {search} {limit} {offset} {orderType}let:actions let:files>
    {#each files as file}
        <p>File: {file.name}</p>
    {/each}
    <button on:click={actions.reload()}>Reload</button>
</FileList>
```

### `<File />`

#### Arguments

- file - it is fileId `@type - {string}`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `download()` | Downloads file. |
| `view(as)` | Get file for View. |
| `preview(width, height, quality, background, output)` | Get file for preview. |
| `update(read, write)` | Updates a file. |
| `delete()` | Deletes a file. |

#### Example

```svelte
<script>
	import { File } from 'metawrite';

	// Required
	/**@type {File}*/ let file;

	// OPTIONAL
	/** @type {number} */ let width;
	/** @type {number} */ let height;
	/** @type {string} */ let gravity;
	/** @type {number} */ let quality;
	/** @type {number} */ let borderWidth;
	/** @type {string} */ let borderColor;
	/** @type {number} */ let borderRadius;
	/** @type {number} */ let opacity;
	/** @type {number} */ let rotation;
	/** @type {string} */ let background;
	/** @type {string} */ let output;
	/** @type {string[]} */ let read;
	/** @type {string[]} */ let write;
</script>

<File {file} let:actions>
	<button on:click={actions.download()}>Download File</button>
	<button on:click={actions.view()}>File View</button>
	<button on:click={actions.preview()}>Preview File</button>
	<button on:click={actions.update(read, write)}>Update File</button>
	<button on:click={actions.delete()}>Delete File</button>
</File>
```

## Functions

The Functions service allows you to create custom behaviour that can be triggered by any supported Appwrite system events or by a predefined schedule.

Appwrite Cloud Functions lets you automatically run backend code in response to events triggered by Appwrite or by setting it to be executed in a predefined schedule. Your code is stored in a secure way on your Appwrite instance and is executed in an isolated environment.

You can learn more by following Appwrite's [Cloud Functions tutorial](https://appwrite.io/docs/functions).

### `<Function />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `create(functionId, data)` | Creates Execution. `functionId` is _required_, `data` could be empty string because _optional_. `@type {string}`|
| `create(functionId, executionId)` | Get Execution. Both parameters are required. `@type {string}` |

- **let:executions**

#### Slots

- **error**

#### Example

```svelte
<script>
	import { Function } from 'metawrite';
	let functionId = 'someExecution'; // required
	let newFunctionId = '';
	let data = 'String of custom data to send to function.'; // could be empty string because optional
</script>

<Function {functionId} {data} let:actions let:executions>
	{#each executions as execution}
		<p>
			Execution ID: {execution.$id}, Function ID: {execution.functionId}, Date Created: {execution.dateCreated}
		</p>
	{/each}
	<input type="text" name="functionId" placeholder="Function ID" bind:value={newFunctionId} />
	<button on:click={actions.create(newFunctionId, data)}>Create Execution</button>
</Function>
```

## Locale

The Locale components allow you to customize your app based on your users' location.

### `<Continents />`

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:continents**

#### Slots

- **loading**
- **error**

#### Example

```svelte
<script>
	import { Continents } from 'metawrite';
</script>

<Continents let:actions let:continents>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {continents.sum} continents:</p>
	{#each continents.continents as continent}
		<p>{continent.name}, {continent.code}</p>
	{/each}
</Continents>
```

### `<Countries />`

#### Arguments

- eu

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:countries**

#### Example

```svelte
<script>
	import { Countries } from 'metawrite';

	let eu = true; // if you want to list only EU countries
</script>

<Countries let:actions let:countries>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {countries.sum} countries in the world:</p>
	{#each countries.countries as country}
		<p>{country.name}, {country.code}</p>
	{/each}
</Countries>

<Countries {eu} let:actions let:countries>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {countries.sum} countries in EU:</p>
	{#each countries.countries as country}
		<p>{country.name}, {country.code}</p>
	{/each}
</Countries>
```

### `<Currencies />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:currencies**

#### Example

```svelte
<script>
	import { Currencies } from 'metawrite';
</script>

<Currencies let:actions let:currencies>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {currencies.sum} currencies:</p>
	{#each currencies.currencies as currency}
		<p>{currency.symbol} - {currency.name} ({currency.code})</p>
	{/each}
</Currencies>
```

### `<Languages />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:languages**

#### Example

```svelte
<script>
	import { Languages } from 'metawrite';
</script>

<Languages let:actions let:languages>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {languages.sum} languages:</p>
	{#each languages.languages as language}
		<p>{language.name}, {language.code}></p>
	{/each}
</Languages>
```

### `<Locale />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:code** `object`

#### Example

```svelte
<script>
	import { Locale } from 'metawrite';
</script>

<Locale let:actions let:code>
	<h1>Active Session</h1>
	<button on:click={actions.reload()}>Reload</button>
	<p>Location: {code.country}, {code.continentCode}</p>
	<p>IP: {code.ip}</p>
</Locale>
```

### `<PhoneCodes />`

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |

- **let:codes**

#### Example

```svelte
<script>
	import { PhoneCodes } from 'metawrite';
</script>

<PhoneCodes let:actions let:codes>
	<button on:click={actions.reload()}>Reload</button>
	<p>There are {codes.sum} phone codes:</p>
	{#each codes.phones as phone}
		<p>{phone.code} - {phone.countyName}></p>
	{/each}
</PhoneCodes>
```

# Stack
<img src="https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
