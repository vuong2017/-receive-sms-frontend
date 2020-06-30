import BaseAction from "../BaseAction";
import { actionTypesDefault } from "@/utils/helpers";

export const actionTypes = actionTypesDefault("PHONE")


export default class PhoneAction extends BaseAction {
    constructor() {
        super(actionTypes)
    }
}

