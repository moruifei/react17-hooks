import React, { useState } from 'react';
import Mouse from './Mouse';
import Cat from './Cat';
import Dog from './Dog';

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