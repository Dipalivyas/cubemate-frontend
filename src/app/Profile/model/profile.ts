export class skills{
    skillTag!:string
}

export class profile{
    firstName!:string;
    lastName!:string;
    profilePhoto!:string;
    dateOfBirth!:string;
    userAddress!:string;
}

export class education{
    institudeName!:string;
    grade!:string;
    isCurrentlyRunning!:boolean;
    courseName!:string;
    courseDescription!:string;
    educationField!:string;
    userEducationID!:number
}

export class media{
    mediaTitle!:string;
    mediaFileBase64!:string;
}

export class experience{
    companyName!:string;
    joiningDate!:Date;
    leavingDate!:Date;
    isWorking!:boolean;
    designation!:string;
}

export class activite{
    activityTitle!:string;
    activityDescription!:string;
    activityAttachment!:string;
    mediaType!:string
}