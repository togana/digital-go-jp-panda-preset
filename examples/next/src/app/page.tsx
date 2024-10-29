import { css } from '@/../styled-system/css';
 
export default function Home() {
  return (
    <>
      <div className={css({ textStyle: 'Dsp-64N-140', backgroundColor: 'success-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Dsp-57N-140', backgroundColor: 'error-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Dsp-48N-140', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Mono-14N-150', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Mono-14B-150', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
    </>
  )
}
