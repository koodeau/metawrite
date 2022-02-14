import Appwrite from './Init.svelte';
import { SDK } from './appwrite';

import Create from './Account/Create.svelte';
import Delete from './Account/Delete.svelte';
import CreateAnonymousSession from './Account/CreateAnonymousSession.svelte';
import CreateJWT from './Account/CreateJWT.svelte';
import MagicURL from './Account/MagicURL.svelte';
import Preferences from './Account/Preferences.svelte';
import RecoverPassword from './Account/RecoverPassword.svelte';
import Update from './Account/Update.svelte';
import User from './Account/User.svelte';
import Verification from './Account/Verification.svelte';

import AuthEmail from './Auth/Email.svelte';
import AuthOAuth2 from './Auth/OAuth2.svelte';

import Collection from './Database/Collection.svelte';
import Document from './Database/Document.svelte';

import * as File from './Storage/File.svelte';
import FileList from './Storage/FileList.svelte';
import Storage from './Storage/Storage.svelte';

import Locale from './Locale/Locale.svelte';
import Countries from './Locale/Countries.svelte';
import Continents from './Locale/Continents.svelte';
import Languages from './Locale/Languages.svelte';
import Currencies from './Locale/Currencies.svelte';
import PhoneCodes from './Locale/PhoneCodes.svelte';

import Flag from './Avatars/Flag.svelte';
import Browser from './Avatars/Browser.svelte';
import CreditCard from './Avatars/CreditCard.svelte';
import Favicon from './Avatars/Favicon.svelte';
import Image from './Avatars/Image.svelte';
import QR from './Avatars/QR.svelte';

import Function from './Functions/Function.svelte';

export {
	Appwrite,
	SDK,
	Create,
	Delete,
	CreateAnonymousSession,
	CreateJWT,
	MagicURL,
	Preferences,
	RecoverPassword,
	Update,
	User,
	Verification,
	AuthEmail,
	AuthOAuth2,
	Collection,
	Document,
	File,
	FileList,
	Storage,
	Locale,
	Countries,
	Continents,
	Languages,
	Currencies,
	PhoneCodes,
	Flag,
	Browser,
	CreditCard,
	Favicon,
	Image,
	QR,
	Function
};
