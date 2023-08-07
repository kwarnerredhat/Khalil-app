import React from 'react';

const secondaryAestheticSection = ({setAesthetic, setSecondaryAesthetic}) => {

return (
    <div>

<h3>
Current secondary aesthetic is {secondaryAestheticSection}.
</h3>
<button onClick={() => setSecondaryAesthetic("Timeless")}>
Fashion
</button>

</div>
)
};

export default secondaryAestheticSection;