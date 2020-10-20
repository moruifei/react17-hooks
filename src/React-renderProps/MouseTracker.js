import React, { useState } from 'react';
import Mouse from './Mouse';


export default function MouseTracker(Component) {
    return () => (
        <div>
            <Mouse render={mouse => (
                <Component mouse={mouse} />
            )}>
            </Mouse>
        </div>
    )
}