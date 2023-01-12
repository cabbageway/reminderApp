// Hier liegen alle Interfaces vor 
// im Interface werden die Attribute und Methoden der Komponenten definiert

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

export interface PlaneObject {
    id:number;
    start: number;
    end: number;
}

export interface PlaneList {
    planes:PlaneObject[];
}