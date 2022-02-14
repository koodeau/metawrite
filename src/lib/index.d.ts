import Appwrite from './Init';
import SDK from './appwrite';

import Create from './Account/Create';
import Delete from './Account/Delete';
import CreateAnonymousSession from './Account/CreateAnonymousSession';
import CreateJWT from './Account/CreateJWT';
import MagicURL from './Account/MagicURL';
import Preferences from './Account/Preferences';
import RecoverPassword from './Account/RecoverPassword';
import Update from './Account/Update';
import User from './Account/User';
import Verification from './Account/Verification';

import AuthEmail from './Auth/Email';
import AuthOAuth2 from './Auth/OAuth2';

import Collection from './Database/Collection';
import Document from './Database/Document';

import File from './Storage/File';
import FileList from './Storage/FileList';
import Storage from './Storage/Storage';

import Locale from './Locale/Locale';
import Countries from './Locale/Countries';
import Continents from './Locale/Continents';
import Languages from './Locale/Languages';
import Currencies from './Locale/Currencies';
import PhoneCodes from './Locale/PhoneCodes';

import Flag from './Avatars/Flag';
import Browser from './Avatars/Browser';
import CreditCard from './Avatars/CreditCard';
import Favicon from './Avatars/Favicon';
import Image from './Avatars/Image';
import QR from './Avatars/QR';

import Function from './Functions/Function';

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