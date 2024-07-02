import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        user_name: "jose",
        user_email: "jose@gmail.com",

    })
}

export function tagCartUpdate(itemsCount: string) {
    OneSignal.User.addTag("cart_items_count", itemsCount)
}