import moment from "moment";

export const formatDate = (value, format = "DD/MM/YYYY") => {
    return moment(value).format(format);
}