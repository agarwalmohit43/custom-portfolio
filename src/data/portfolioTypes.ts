type HeaderType = {
    homepage:string,
    title:string
}   

type AboutTypes = {
name: string,
role: string,
description: string,
resume: string,
social: {
    linkedin:string,
    github: string,
    whatsapp:string
}
}

type ProjectType = {
    name:string,
    description:string,
    stack:string[],
    sourceCode:string,
    livePreview:string
}

type ContactType = {
    email: string
}


export type {HeaderType, AboutTypes, ProjectType, ContactType}