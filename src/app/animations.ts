import { trigger, transition, style, animate, animation, state, keyframes, useAnimation } from '@angular/animations';

export let bounceOutLeftAnimation = animation(
    animate('0.5s cubic-bezier(0,.79,1,.2)', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(150px)'}),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'})
 ]))
);

export let fadeInAnimation = animation([
    style({ opacity : 0 }),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
});

export let fadeOutAnimation = animation([
    style({ opacity : 0 }),
    animate('{{ duration }} {{ easing }}')
], {
    params: {
        duration: '2s',
        easing: 'ease-in'
    }
});

export let fade = trigger ('fade', [
    //state('void', style({ opacity : 0 })),
    transition(':enter',
    useAnimation(fadeInAnimation)
    ),

    transition(':leave',  //void <=> *
    //animate(800, style({opacity : 0}))
    useAnimation(fadeOutAnimation)
    )
]);

export let slide = trigger('slide', [
    //state('void', style({opacity : 0})),
    transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate(800)
    ]),

    transition(':leave',
        //style({ transform: 'translateX(-10px)'}),
        useAnimation(bounceOutLeftAnimation),
    )
]);

