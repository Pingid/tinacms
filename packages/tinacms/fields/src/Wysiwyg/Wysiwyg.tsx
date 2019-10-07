import * as React from 'react'
import styled from 'styled-components'
import { Plugin } from '@tinacms/core'
import { useTinaProsemirror } from './useTinaProsemirror'
import { ALL_PLUGINS } from './default-plugins'

interface Wysiwyg {
  input: any
  frame?: any
  plugins?: Plugin[]
}

export const Wysiwyg = styled(
  ({ input, plugins, frame, ...styleProps }: any) => {
    const prosemirrorEl = useTinaProsemirror(input, ALL_PLUGINS, frame)

    return (
      <>
        <link
          rel="stylesheet"
          href="https://codemirror.net/lib/codemirror.css"
        />
        <div {...styleProps} ref={prosemirrorEl} />
      </>
    )
  }
)`
  white-space: pre-wrap;

  .CodeMirror {
    width: 100%;
    height: auto;
    border-radius: 0.3rem;
    margin-bottom: 1rem;

    .CodeMirror-sizer {
      min-height: auto;
    }
  }
`
