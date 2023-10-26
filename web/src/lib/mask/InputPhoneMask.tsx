'use client'

import { FormEvent, ForwardedRef, forwardRef, useState } from 'react'
import { IMaskInput } from 'react-imask'

type CustomProps = {
  phone: string
  onChange: (event: { target: { name: string; value: string } }) => void
}

const PhoneMask = forwardRef<HTMLElement, CustomProps>(
  function PhoneMask(props, ref) {
    const { onChange, ...other } = props

    const [value, setValue] = useState('')

    return (
      <IMaskInput
        {...other}
        mask={value.length < 14 ? '(00) 0000-0000' : '(00) 00000-0000'}
        inputRef={ref as ForwardedRef<HTMLInputElement>}
        onAccept={(value: string) =>
          onChange({ target: { name: props.phone, value } })
        }
        onChange={(event: FormEvent<HTMLInputElement>) =>
          setValue(event.currentTarget.value)
        }
        overwrite
      />
    )
  },
)

export const inputComponentMaskPhone = {
  inputComponent: PhoneMask as any,
}
