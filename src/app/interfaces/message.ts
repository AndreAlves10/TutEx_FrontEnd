export interface Message {
    userIDFrom: number;
    userIDTo: number;
    content: string;
    messageUTCCreatedDate: Date;
    seenByUserTo: boolean; 
}
