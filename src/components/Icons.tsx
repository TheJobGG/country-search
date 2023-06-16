interface IconMoonProps {
  className?: string;
}


export function IconMoon({ className }: IconMoonProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className={className}>
      <path d="M145 99a224 224 0 0 0 117 329A175 175 0 0 1 48 256c0-69 39-128 97-157zm62-66a224 224 0 1 0 145 406l5-4a216 216 0 0 0 22-18 16 16 0 0 0-14-27l-11 1-15 1h-4A176 176 0 0 1 224 80l3-2a158 158 0 0 1 22-15 16 16 0 0 0-7-30l-10-1h-18l-7 1z" />
    </svg>
  )
}

export function IconBackArrow({ className }: IconMoonProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className={className}>
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/>
    </svg>
  )
}

export function IconSearch({ className }: IconMoonProps) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className={className}>
      <path d="M416 208c0 46-15 88-40 123l127 126a32 32 0 0 1-46 46L331 376a208 208 0 1 1 85-168zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
  )
}

export function IconChevronDown({ className }: IconMoonProps) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className={className}>
      <path d="M233 407c13 12 33 12 46 0l192-192a32 32 0 0 0-46-46L256 339 87 169a32 32 0 0 0-46 46l192 192z"/>
    </svg>
  )
}