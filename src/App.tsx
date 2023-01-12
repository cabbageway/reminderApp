import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import TestComponent from './components/testComponent';
import TestEinfacheDatentypen from './components/TestEinfacheDatentypen';
import { Reminder, IString, PlaneList, PlaneObject } from './models/Reminder';
import ReminderService from './services/reminder';
import Badge from './components/Badge';
import BadgeFunctional from './components/BadgeFunctional';
import Button from './components/Button';
import CounterWidth from './components/CounterWidth';
import Counters from './components/Counters';
import NewReminderForm from './components/NewReminderForm';
import ClassComponent from './components/ClassComponent';
import Map from './components/Map';


// Array von Reminderobjekten
const remindersStatic: Reminder[] = [
  {id:1,title: 'Reminder 1'}, 
  {id:2, title: 'React lernen'}
]; 



const planesStatic: PlaneObject[] = [{
  id:1, start:23, end:7},
  {id:1, start:23, end:7}
]; 

// Variablendefinition
const zahl:number=5;
const name:string="meinName";

/* interface IProps {
  name: string,
  nr : number
}
let params:IProps = {name:"chris", nr:44};
*/

let testString:IString = {text: "chris",text2:"gg"};

function App() {

  // state hook 
  
  const [reminders, setReminders] = 
    useState<Reminder[]>([
    //{id:1,title: 'Reminder 1'}
  ]);  
  
  //effect hook
  useEffect(()=> {
    loadReminders();
  },[]);
  

  // holen des Reminder Service um über die API 
  // Daten zu holen
  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  // Bauen von  Reminder Delete 
  const removeReminders = (id:number) => {
    console.log(id);
    let rem: Reminder[]= [];
    reminders.forEach(item => {
      if ( item.id != id)
        rem.push(item);
    }); 
    setReminders(rem);
  }

  const addReminder = (title:string) => {
    console.log(title);
    let length = reminders.length;
    let reminder = {id: length+1, title: title }
   // reminders.push(reminder);
    setReminders([reminder, ...reminders]);
  }

  const lokalFunki = () => {
    alert("die wird generiert");
  }

  const removePlanes = () => {
    alert("plane gelöscht");
  }

  return (
    
    <div className="App">
      <p>Ausgabe von Daten innerhalb der App Komponente </p>
      <p>Ausgabe von Variablen der APP Komponente z.B. Zahl: {zahl} </p>
      <p>Ausgabe von Objekten der APP Komponente z.B. Reminder: {remindersStatic[0].title} </p>

      <TestEinfacheDatentypen name={name} nr={zahl}></TestEinfacheDatentypen>
      
      <TestComponent text={testString.text} text2={testString.text2}></TestComponent>
      
      <button className="btn btn-primary" onClick={lokalFunki}>Click me (App)</button>

      <hr />

      <Map planes={planesStatic} onRemovePlanes={removePlanes}></Map>

      <Button></Button>
      <CounterWidth></CounterWidth>
    
      <Badge ></Badge>
    
      <BadgeFunctional text={testString.text} text2={testString.text2}></BadgeFunctional>
      <TestEinfacheDatentypen name={name} nr={zahl}></TestEinfacheDatentypen>
      
      
      
      <ReminderList  items={remindersStatic} onRemoveReminder={removeReminders}  />

      <NewReminderForm onAddReminder={addReminder}/>
      <ReminderList  items={reminders} onRemoveReminder={removeReminders}  />
      
      <ClassComponent></ClassComponent> 
      <Counters></Counters> 
    
    </div>
  );
}

export default App;
