
  
export const ErrorMessage = ({
    children,
    className,
    }) => {
    const defaultClasses = 'text-red-500 mt-2'
    const classes = defaultClasses + ' ' + (className ?? '')
    
    return <p className={classes}>{children}</p>
}
      