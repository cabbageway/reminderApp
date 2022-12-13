

export interface Reminder {
    id: number;
    title: string;
}

export interface ReminderListProps {
    items: Reminder[];
    // hinzufügen des Deletefunction zum Interface
    onRemoveReminder: (id:number) => void;
}
export interface IString {
    text: string,
    text2:string
}