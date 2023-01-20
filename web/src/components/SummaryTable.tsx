import { generatedatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const  summaryDates = generatedatesFromYearBeginning()
const minumumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minumumSummaryDatesSize - summaryDates.length

export function SummaryTable(){
  return(
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row">
        {weekDays.map((weekDay, i) =>{
          return(
            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col">
        {summaryDates.map(date =>{
          return <HabitDay key={date.toString()} />
        })}
        {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) =>{
          return(
            <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">
              <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
            </div>
          )
        })}
      </div>
    </div>
  )
}