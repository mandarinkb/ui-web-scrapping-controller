export class Response {
    status: number;
    message: string ;
    id: number;
    departmantId: number;
    username: string;
    role: string;
    tokenType: string;
    accessToken: string;
    exception: string; // กรณี error
}
