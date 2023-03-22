import { hikesModel } from '../models/hikes.model.js';

export async function updateHike(id, body) {
    body.lastUpdated = getCurrentDatetime();
    const hike = await hikesModel.findByIdAndUpdate({ _id: id }, body, {
        new: true,
    });
    return hike;
}

export async function createHike(body) {
    let currDatetime = getCurrentDatetime();
    body.lastUpdated = currDatetime;
    body.creationDate = currDatetime;
    // ##################
    body.createdBy = 'admin'; // UPDATE LATER
    // ##################
    const hike = await hikesModel.create(body);
    return hike;
}

function getCurrentDatetime() {
    let date_time = new Date();
    let d = ('0' + date_time.getDate()).slice(-2);
    let m = ('0' + (date_time.getMonth() + 1)).slice(-2);
    let y = date_time.getFullYear();
    let h = ('0' + date_time.getHours()).slice(-2);
    let min = ('0' + date_time.getMinutes()).slice(-2);
    let sec = ('0' + date_time.getSeconds()).slice(-2);
    let milli = ('00' + date_time.getMilliseconds()).slice(-3);

    return `${y}-${m}-${d} ${h}:${min}:${sec}.${milli}`;
}
