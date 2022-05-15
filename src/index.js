import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3nYdoauEqlOoWXWuExB8NZ1pFWqohFys",
    authDomain: "justice-da7ef.firebaseapp.com",
    databaseURL: "https://justice-da7ef.firebaseio.com",
    projectId: "justice-da7ef",
    storageBucket: "justice-da7ef.appspot.com",
    messagingSenderId: "309162069921",
    appId: "1:309162069921:web:ca7c07a5e71be9f95145e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function writeAssocData(associationId, title, summary, email, label, url, phone, address, lat, long, mOpen, mClose, tOpen, tClose, wOpen, wClose, thOpen, thClose, fOpen, fClose, sOpen, sClose, suOpen, suClose, imageUrl, media, mediaUrl) {

    const db = getDatabase();
    const associations = ref(db, 'associations/' + associationId);

    set(associations, {
        association: associationId,
        title: title,
        summary: summary,
        email: email,
        urlLabel: label,
        url: url,
        phoneNumber: phone,
        address: address,
        latitude: lat,
        longitude: long,
        mondayStart: mOpen,
        mondayEnd: mClose,
        tuesdayStart: tOpen,
        tuesdayEnd: tClose,
        wednesdayStart: wOpen,
        wednesdayEnd: wClose,
        thursdayStart: thOpen,
        thursdayEnd: thClose,
        fridayStart: fOpen,
        fridayEnd: fClose,
        saturdayStart: sOpen,
        saturdayEnd: sClose,
        sundayStart: suOpen,
        sundayEnd: suClose,
        image: imageUrl,
        otherType: media,
        siteUrl: mediaUrl
    });
}

writeAssocData("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test");

writeAssocData("001", "Mass. Black Lawyers Association", "Since 1973, the MBLA has worked to attract, retain and elevate talented Black attorneys and the goal remains the same. President Barack Obama said it best by noting that '[c]hange will not come if we wait for some other person, or if we wait for some other time. We are the ones we’ve been waiting for. We are the change that we seek.'", "info@mablacklawyers.org", "Website#Become a Member#Advocacy#Public Resources#Lawyer Referral Service", "https://mablacklawyers.org/#https://mablacklawyers.org/join-the-mbla/#https://mablacklawyers.org/volunteer-opportunities/#https://mablacklawyers.org/resources/helpful-links/#https://mablacklawyers.org/resources/mbla-attorney-referral-program/", "null", "16 Beacon Street Boston MA 02108 USA", "42.3578329", "-71.06257240000000", "08", "16", "08", "16", "08", "16", "08", "16", "08", "16", "08", "16", "08", "16", "null", "null", "null" );