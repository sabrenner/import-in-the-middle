import camelcase from 'camelcase'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  camelcase('foo bar')

  return NextResponse.json({})
}
