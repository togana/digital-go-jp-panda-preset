import { css } from '@/../styled-system/css';
 
export default function Home() {
  return (
    <>
      <div className={css({ textStyle: 'Dsp-64N-4', backgroundColor: 'success-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Dsp-57N-4', backgroundColor: 'error-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Dsp-48N-4', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Mono-14N-5', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
      <div className={css({ textStyle: 'Mono-14B-5', backgroundColor: 'warning-yellow-1' })}>Hello 🐼!</div>
    </>
  )
}
