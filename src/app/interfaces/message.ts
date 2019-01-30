export interface Message {
    userIDFrom: number;
    userIDTo: number;
    nameUserFrom: string,
    nameUserTo: string,
    content: string;
    messageUTCCreatedDate: Date;
    seenByUserTo: boolean; 
}
