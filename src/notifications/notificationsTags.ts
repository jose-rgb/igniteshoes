import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        user_name: "jose",
        user_email: "jose@gmail.com",

    })
}