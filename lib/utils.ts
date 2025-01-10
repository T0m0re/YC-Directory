import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string){
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export function formatNumber(totalViews: number){
  
  if (!totalViews) return ('0 View')
  if (totalViews <= 1) {
    return (`${totalViews} View`) }
    else{
    return (`${totalViews} Views`)
  }
}

export function parseServerActionResponse<T>(response: T){
  return JSON.parse(JSON.stringify(response));
}