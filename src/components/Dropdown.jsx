import React, { useState, FormControl } from 'react';


export const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <a href="" ref={ref} onClick={(e) => {e.preventDefault(); onClick(e);}}>
        {children}
        &#x25bc;
    </a>
));

export const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >

          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );