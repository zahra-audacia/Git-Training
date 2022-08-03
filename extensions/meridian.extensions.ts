import { Work } from "../models/work";

export function isMorningWork(work: Work): boolean {
    return work.startMeridian === Meridian.AM && work.endMeridian === Meridian.AM;
}

export function isAfternoonWork(work: Work): boolean {
    return work.startMeridian === Meridian.PM && work.endMeridian === Meridian.PM;
}

export function isFullDayWork(work: Work): boolean {
    return work.startMeridian === Meridian.FullDay && work.endMeridian === Meridian.FullDay;
}

class MeridianExtensions {
    isMorningWork: (work: Work) => boolean;
    isAfternoonWork: (work: Work) => boolean;
    isFullDayWork: (work: Work) => boolean;
}

MeridianExtensions.prototype.isMorningWork = isMorningWork;
MeridianExtensions.prototype.isAfternoonWork = isAfternoonWork;
MeridianExtensions.prototype.isFullDayWork = isFullDayWork;

const meridianExtensions = new MeridianExtensions();
export default meridianExtensions;