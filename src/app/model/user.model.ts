import { notification } from "./notification.model";
import { proyect } from "./project.model";

export interface globalUser {
    data: user;
    message: string;
    status: string;
}

export interface user {
    id: number;
    email: string;
    name: string;
    last_name: string;
    url_avatar: string;
    role_id: number;
    created_at: Date;
    updated_at: Date;
    role: role;
    proyects: proyect[];
    notifications: notification[];
}


export interface role {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
}