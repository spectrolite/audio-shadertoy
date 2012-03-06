define("embr/core/Util",[],function(){function b(b,c){var d,e=[];while((d=b.getError())!==b.NO_ERROR)e.push(d);if(e.length>0){if(a===null){a={};for(var f in b)typeof b[f]=="number"&&(a[b[f]]=f)}throw c+" ("+e.map(function(b){return a[b]}).join(", ")+")"}}function c(a){var c,d,e={};for(c in a)d=a[c],typeof d=="function"?e[c]=function(c,d){return function(){var e=d.apply(a,arguments);return b(a,"GL Error in "+c),e}}(c,d):e[c]=d;return e}function d(a,b){function d(){this.constructor=b}for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return d.prototype=a.prototype,b.prototype=new d,b}function e(a){var b={};for(var c in a)a[c]instanceof Object?b[c]=e(a[c]):b[c]=a[c];return b}function f(a,b){if(b===undefined)return e(a);var c,d={};for(var g in a)c=g in b?b[g]:a[g],c instanceof Object?d[g]=f(a[g],b[g]):d[g]=c;return d}"use strict";var a=null;return{glCheckErr:b,glWrapContextWithErrorChecks:c,extend:d,mergeOptions:f}}),define("embr/core/Vec2",[],function(){function a(a,b){this.x=a,this.y=b}return"use strict",a.prototype={set:function(a,b){return this.x=a,this.y=b,this},setVec2:function(a){return this.x=a.x,this.y=a.y,this},dot:function(a){return this.x*a.x+this.y*a.y},add2:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this},add:function(a){return this.add2(this,a)},added:function(b){return new a(this.x+b.x,this.y+b.y)},sub2:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this},sub:function(a){return this.sub2(this,a)},subbed:function(b){return new a(this.x-b.x,this.y-b.y)},mul2:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this},mul:function(a){return this.mul2(this,a)},mulled:function(b){return new a(this.x*b.x,this.y*b.y)},scale:function(a){return this.x*=a,this.y*=a,this},scaled:function(b){return new a(this.x*b,this.y*b)},lerp:function(a,b){return this.x=this.x+(a.x-this.x)*b,this.y=this.y+(a.y-this.y)*b,this},lerped:function(b,c){return new a(this.x+(b.x-this.x)*c,this.y+(b.y-this.y)*c)},length:function(){var a=this.x,b=this.y;return Math.sqrt(a*a+b*b)},lengthSquared:function(){var a=this.x,b=this.y;return a*a+b*b},dist:function(a){var b=a.x-this.x,c=a.y-this.y;return Math.sqrt(b*b+c*c)},distSquared:function(a){var b=a.x-this.x,c=a.y-this.y;return b*b+c*c},normalize:function(){return this.scale(1/this.length())},normalized:function(){return this.dup().normalize()},rotate:function(a){var b=Math.sin(a),c=Math.cos(a),d=this.x,e=this.y;return this.x=d*c-e*b,this.y=d*b+e*c,this},rotated:function(a){return this.dup().rotate(a)},reflect:function(a){var b=this.dot(a)*2;return this.x-=a.x*b,this.y-=a.y*b,this},reflected:function(b){var c=this.dot(b)*2;return new a(this.x-b.x*c,this.y-b.y*c)},dup:function(){return new a(this.x,this.y)}},a}),define("embr/core/Vec3",[],function(){function a(a,b,c){this.x=a,this.y=b,this.z=c}return"use strict",a.prototype={set:function(a,b,c){return this.x=a,this.y=b,this.z=c,this},setVec3:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this},cross2:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;return this.x=d*h-e*g,this.y=e*f-c*h,this.z=c*g-d*f,this},cross:function(a){return this.cross2(this,a)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},add2:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this},add:function(a){return this.add2(this,a)},added:function(b){return new a(this.x+b.x,this.y+b.y,this.z+b.z)},sub2:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this},sub:function(a){return this.sub2(this,a)},subbed:function(b){return new a(this.x-b.x,this.y-b.y,this.z-b.z)},mul2:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this},mul:function(a){return this.mul2(this,a)},mulled:function(b){return new a(this.x*b.x,this.y*b.y,this.z*b.z)},scale:function(a){return this.x*=a,this.y*=a,this.z*=a,this},scaled:function(b){return new a(this.x*b,this.y*b,this.z*b)},lerp:function(a,b){return this.x=this.x+(a.x-this.x)*b,this.y=this.y+(a.y-this.y)*b,this.z=this.z+(a.z-this.z)*b,this},lerped:function(b,c){return new a(this.x+(b.x-this.x)*c,this.y+(b.y-this.y)*c,this.z+(b.z-this.z)*c)},length:function(){var a=this.x,b=this.y,c=this.z;return Math.sqrt(a*a+b*b+c*c)},lengthSquared:function(){var a=this.x,b=this.y,c=this.z;return a*a+b*b+c*c},dist:function(a){var b=a.x-this.x,c=a.y-this.y,d=a.z-this.z;return Math.sqrt(b*b+c*c+d*d)},distSquared:function(a){var b=a.x-this.x,c=a.y-this.y,d=a.z-this.z;return b*b+c*c+d*d},normalize:function(){return this.scale(1/this.length())},normalized:function(){return this.dup().normalize()},dup:function(){return new a(this.x,this.y,this.z)}},a}),define("embr/core/Vec4",[],function(){function a(a,b,c,d){this.x=a,this.y=b,this.z=c,this.w=d}return"use strict",a.prototype={set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setVec4:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w,this},dup:function(){return new a(this.x,this.y,this.z,this.w)}},a}),define("embr/core/Mat4",["embr/core/Vec3"],function(a){function b(){this.reset()}return"use strict",b.prototype={set4x4r:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return this.a11=a,this.a12=b,this.a13=c,this.a14=d,this.a21=e,this.a22=f,this.a23=g,this.a24=h,this.a31=i,this.a32=j,this.a33=k,this.a34=l,this.a41=m,this.a42=n,this.a43=o,this.a44=p,this},reset:function(){return this.set4x4r(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},mul2:function(a,b){var c=a.a11,d=a.a12,e=a.a13,f=a.a14,g=a.a21,h=a.a22,i=a.a23,j=a.a24,k=a.a31,l=a.a32,m=a.a33,n=a.a34,o=a.a41,p=a.a42,q=a.a43,r=a.a44,s=b.a11,t=b.a12,u=b.a13,v=b.a14,w=b.a21,x=b.a22,y=b.a23,z=b.a24,A=b.a31,B=b.a32,C=b.a33,D=b.a34,E=b.a41,F=b.a42,G=b.a43,H=b.a44;return this.a11=c*s+d*w+e*A+f*E,this.a12=c*t+d*x+e*B+f*F,this.a13=c*u+d*y+e*C+f*G,this.a14=c*v+d*z+e*D+f*H,this.a21=g*s+h*w+i*A+j*E,this.a22=g*t+h*x+i*B+j*F,this.a23=g*u+h*y+i*C+j*G,this.a24=g*v+h*z+i*D+j*H,this.a31=k*s+l*w+m*A+n*E,this.a32=k*t+l*x+m*B+n*F,this.a33=k*u+l*y+m*C+n*G,this.a34=k*v+l*z+m*D+n*H,this.a41=o*s+p*w+q*A+r*E,this.a42=o*t+p*x+q*B+r*F,this.a43=o*u+p*y+q*C+r*G,this.a44=o*v+p*z+q*D+r*H,this},mul:function(a){return this.mul2(this,a)},mul4x4r:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=this.a11,r=this.a12,s=this.a13,t=this.a14,u=this.a21,v=this.a22,w=this.a23,x=this.a24,y=this.a31,z=this.a32,A=this.a33,B=this.a34,C=this.a41,D=this.a42,E=this.a43,F=this.a44;return this.a11=q*a+r*e+s*i+t*m,this.a12=q*b+r*f+s*j+t*n,this.a13=q*c+r*g+s*k+t*o,this.a14=q*d+r*h+s*l+t*p,this.a21=u*a+v*e+w*i+x*m,this.a22=u*b+v*f+w*j+x*n,this.a23=u*c+v*g+w*k+x*o,this.a24=u*d+v*h+w*l+x*p,this.a31=y*a+z*e+A*i+B*m,this.a32=y*b+z*f+A*j+B*n,this.a33=y*c+z*g+A*k+B*o,this.a34=y*d+z*h+A*l+B*p,this.a41=C*a+D*e+E*i+F*m,this.a42=C*b+D*f+E*j+F*n,this.a43=C*c+D*g+E*k+F*o,this.a44=C*d+D*h+E*l+F*p,this},rotate:function(a,b,c,d){var e=Math.sin(a),f=Math.cos(a);return this.mul4x4r(b*b*(1-f)+f,b*c*(1-f)-d*e,b*d*(1-f)+c*e,0,c*b*(1-f)+d*e,c*c*(1-f)+f,c*d*(1-f)-b*e,0,b*d*(1-f)-c*e,c*d*(1-f)+b*e,d*d*(1-f)+f,0,0,0,0,1),this},translate:function(a,b,c){return this.mul4x4r(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1),this},scale:function(a,b,c){return this.mul4x4r(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1),this},lookAt:function(b,c,d,e,f,g,h,i,j){var k=(new a(b-e,c-f,d-g)).normalize(),l=(new a(h,i,j)).cross(k).normalize(),m=k.dup().cross(l).normalize();return this.mul4x4r(l.x,l.y,l.z,0,m.x,m.y,m.z,0,k.x,k.y,k.z,0,0,0,0,1),this.translate(-b,-c,-d),this},frustum:function(a,b,c,d,e,f){return this.mul4x4r((e+e)/(b-a),0,(b+a)/(b-a),0,0,(e+e)/(d-c),(d+c)/(d-c),0,0,0,(f+e)/(e-f),2*f*e/(e-f),0,0,-1,0),this},perspective:function(a,b,c,d){var e=1/Math.tan(a*Math.PI/360);return this.mul4x4r(e/b,0,0,0,0,e,0,0,0,0,(d+c)/(c-d),2*c*d/(c-d),0,0,-1,0),this},ortho:function(a,b,c,d,e,f){return this.mul4x4r(2/(b-a),0,0,(b+a)/(a-b),0,2/(d-c),0,(d+c)/(c-d),0,0,2/(e-f),(f+e)/(e-f),0,0,0,1),this},invert:function(){var a=this.a11,b=this.a12,c=this.a13,d=this.a14,e=this.a21,f=this.a22,g=this.a23,h=this.a24,i=this.a31,j=this.a32,k=this.a33,l=this.a34,m=this.a41,n=this.a42,o=this.a43,p=this.a44,q=a*f-b*e,r=a*g-c*e,s=a*h-d*e,t=b*g-c*f,u=b*h-d*f,v=c*h-d*g,w=i*n-j*m,x=i*o-k*m,y=i*p-l*m,z=j*o-k*n,A=j*p-l*n,B=k*p-l*o,C=1/(q*B-r*A+s*z+t*y-u*x+v*w);return this.a11=(+f*B-g*A+h*z)*C,this.a12=(-b*B+c*A-d*z)*C,this.a13=(+n*v-o*u+p*t)*C,this.a14=(-j*v+k*u-l*t)*C,this.a21=(-e*B+g*y-h*x)*C,this.a22=(+a*B-c*y+d*x)*C,this.a23=(-m*v+o*s-p*r)*C,this.a24=(+i*v-k*s+l*r)*C,this.a31=(+e*A-f*y+h*w)*C,this.a32=(-a*A+b*y-d*w)*C,this.a33=(+m*u-n*s+p*q)*C,this.a34=(-i*u+j*s-l*q)*C,this.a41=(-e*z+f*x-g*w)*C,this.a42=(+a*z-b*x+c*w)*C,this.a43=(-m*t+n*r-o*q)*C,this.a44=(+i*t-j*r+k*q)*C,this},transpose:function(){var a=this.a11,b=this.a12,c=this.a13,d=this.a14,e=this.a21,f=this.a22,g=this.a23,h=this.a24,i=this.a31,j=this.a32,k=this.a33,l=this.a34,m=this.a41,n=this.a42,o=this.a43,p=this.a44;return this.a11=a,this.a12=e,this.a13=i,this.a14=m,this.a21=b,this.a22=f,this.a23=j,this.a24=n,this.a31=c,this.a32=g,this.a33=k,this.a34=o,this.a41=d,this.a42=h,this.a43=l,this.a44=p,this},mulVec3:function(b){var c=b.x,d=b.y,e=b.z;return new a(this.a14+this.a11*c+this.a12*d+this.a13*e,this.a24+this.a21*c+this.a22*d+this.a23*e,this.a34+this.a31*c+this.a32*d+this.a33*e)},mulVec4:function(a){var b=a.x,c=a.y,d=a.z,e=a.w;return new Vec4(this.a14*e+this.a11*b+this.a12*c+this.a13*d,this.a24*e+this.a21*b+this.a22*c+this.a23*d,this.a34*e+this.a31*b+this.a32*c+this.a33*d,this.a44*e+this.a41*b+this.a42*c+this.a43*d)},dup:function(){var a=new b;return a.set4x4r(this.a11,this.a12,this.a13,this.a14,this.a21,this.a22,this.a23,this.a24,this.a31,this.a32,this.a33,this.a34,this.a41,this.a42,this.a43,this.a44),a},toFloat32Array:function(){return new Float32Array([this.a11,this.a21,this.a31,this.a41,this.a12,this.a22,this.a32,this.a42,this.a13,this.a23,this.a33,this.a43,this.a14,this.a24,this.a34,this.a44])},to3x3Float32Array:function(){return new Float32Array([this.a11,this.a21,this.a31,this.a12,this.a22,this.a32,this.a13,this.a23,this.a33])}},b.ptFirstFrame=function(c,d,e){var f=e.dup().cross(d.subbed(c));if(f.lengthSquared()===0){var g=Math.abs(e.x),h=Math.abs(e.y),i=Math.abs(e.z);i<g&&i<h?f=e.dup().cross(new a(0,0,e.z)):h>g&&h>i?f=e.dup().cross(new a(0,e.y,0)):f=e.dup().cross(new a(e.x,0,0))}f.normalize();var j=e.dup().cross(f);return(new b).set4x4r(j.x,f.x,e.x,c.x,j.y,f.y,e.y,c.y,j.z,f.z,e.z,c.z,0,0,0,1)},b.ptNextFrame=function(a,c,d,e,f){var g=Math.acos(e.dot(f)),h=e.dup().cross(f);return g!==0&&h.lengthSquared()!==0?(h.normalize(),(new b).translate(d.x,d.y,d.z).rotate(g,h.x,h.y,h.z).translate(-c.x,-c.y,-c.z).mul(a)):(new b).translate(d.x-c.x,d.y-c.y,d.z-c.z).mul(a)},b}),define("embr/core/Math",["embr/core/Vec3","embr/core/Mat4"],function(a,b){"use strict";var c={},d=c.kPI2=Math.PI/2,e=c.kPI4=Math.PI/4,f=c.k2PI=Math.PI*2;return c.rand=function(a){return Math.random()*a},c.randInt=function(a){return Math.floor(Math.random()*a)},c.rand2=function(a,b){return a+Math.random()*(b-a)},c.randInt2=function(a,b){return Math.floor(a+Math.random()*(b-a))},c.randSym=function(a){return a*2*Math.random()-a},c.lerp=function(a,b,c){return a+(b-a)*c},c.lmap=function(a,b,c,d,e){return d+(e-d)*((a-b)/(c-b))},c.clamp=function(a,b,c){return a<b?b:a>c?c:a},c.isPow2=function(a){return a!=0&&(a&a-1)==0},c.randVec3=function(b){var c=Math.random()*f,d=Math.random()*2-1,e=Math.sqrt(1-d*d);return new a(e*Math.cos(c)*b,e*Math.sin(c)*b,d*b)},c}),define("embr/core/Quat",["embr/core/Mat4","embr/core/Vec3"],function(a,b){function c(a,b,c,d){this.x=a,this.y=b,this.z=c,this.w=d}return"use strict",c.identity=function(){return new c(0,0,0,1)},c.prototype={set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setQuat:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w,this},reset:function(){return this.set(0,0,0,1)},length:function(){var a=this.x,b=this.y,c=this.z,d=this.w;return Math.sqrt(a*a+b*b+c*c+d*d)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},mul2:function(a,b){var c=a.x,d=a.y,e=a.z,f=a.w,g=b.x,h=b.y,i=b.z,j=b.w;return this.x=j*c+g*f+h*e-i*d,this.y=j*d+h*f+i*c-g*e,this.z=j*e+i*f+g*d-h*c,this.w=j*f-g*c-h*d-i*e,this},mul:function(a){return this.mul2(this,a)},mulled:function(a){return this.dup().mul2(this,a)},mul4:function(a,b,c,d){var e=this.x,f=this.y,g=this.z,h=this.w;return this.x=d*e+a*h+b*g-c*f,this.y=d*f+b*h+c*e-a*g,this.z=d*g+c*h+a*f-b*e,this.w=d*h-a*e-b*f-c*g,this},mulVec3:function(a){var c=this.x,d=this.y,e=this.z,f=this.w,g=2*(c*a.x+d*a.y+e*a.z),h=2*f,i=h*f-1;return new b(i*a.x+g*c+h*(d*a.z-e*a.y),i*a.y+g*d+h*(e*a.x-c*a.z),i*a.z+g*e+h*(c*a.y-d*a.x))},normalize:function(){var a=this.length();return a>0&&(this.x/=a,this.y/=a,this.z/=a,this.w/=a),this},rotate:function(a,b,c,d){var e=Math.sqrt(b*b+c*c+d*d);if(e>0){var f=a/2,g=Math.sin(f);this.mul4(b/e*g,c/e*g,d/e*g,Math.cos(f))}return this},slerp:function(a,b){var c=this.dot(a),d,e,f,g;return c>=0?1-c>0?(f=Math.acos(c),g=1/Math.sin(f),d=Math.sin((1-b)*f)*g,e=Math.sin(b*f)*g):(d=1-b,e=b):1+c>0?(f=Math.acos(-c),g=1/Math.sin(f),d=Math.sin((b-1)*f)*g,e=Math.sin(b*f)*g):(d=b-1,e=b),this.set(this.x*d+a.x*e,this.y*d+a.y*e,this.z*d+a.z*e,this.w*d+a.w*e)},toMat4:function(){var b=this.x+this.x,c=this.y+this.y,d=this.z+this.z,e=this.w*b,f=this.w*c,g=this.w*d,h=this.x*b,i=this.x*c,j=this.x*d,k=this.y*c,l=this.y*d,m=this.z*d;return(new a).set4x4r(1-(k+m),i-g,j+f,0,i+g,1-(h+m),l-e,0,j-f,l+e,1-(h+k),0,0,0,0,1)},dup:function(){return new c(this.x,this.y,this.z,this.w)},toArray:function(){return[this.x,this.y,this.z,this.w]}},c}),define("embr/core/Program",[],function(){function d(a,b,c){this.gl=a}"use strict";var a="#ifdef GL_ES\nprecision highp float;\n#endif\n",b=a+"#define EM_VERTEX\n",c=a+"#define EM_FRAGMENT\n";return d.prototype={compile:function(a,d){var e=this.gl,f,g;this.handle=e.createProgram();if(a){f=e.createShader(e.VERTEX_SHADER),e.shaderSource(f,b+a),e.compileShader(f);if(e.getShaderParameter(f,e.COMPILE_STATUS)!==!0)throw e.getShaderInfoLog(f);e.attachShader(this.handle,f),e.deleteShader(f)}if(d){g=e.createShader(e.FRAGMENT_SHADER),e.shaderSource(g,c+d),e.compileShader(g);if(e.getShaderParameter(g,e.COMPILE_STATUS)!==!0)throw e.getShaderInfoLog(g);e.attachShader(this.handle,g),e.deleteShader(g)}},link:function(){function c(b,c){switch(b){case a.BOOL:case a.INT:case a.SAMPLER_2D:case a.SAMPLER_CUBE:return function(b){return a.uniform1i(c,b),this};case a.FLOAT:return function(b){return a.uniform1f(c,b),this};case a.FLOAT_VEC2:return function(b){a.uniform2f(c,b.x,b.y)};case a.FLOAT_VEC3:return function(b){a.uniform3f(c,b.x,b.y,b.z)};case a.FLOAT_VEC4:return function(b){a.uniform4f(c,b.x,b.y,b.z,b.w)};case a.FLOAT_MAT3:return function(b){a.uniformMatrix3fv(c,!1,b.to3x3Float32Array())};case a.FLOAT_MAT4:return function(b){a.uniformMatrix4fv(c,!1,b.toFloat32Array())}}return function(){throw"Unknown uniform type: "+b}}var a=this.gl,b=this.handle;a.linkProgram(b);if(a.getProgramParameter(b,a.LINK_STATUS)!==!0)throw a.getProgramInfoLog(b);this.uniforms={},this.locations={};var d,e,f,g=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(d=0;d<g;++d)e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),this.uniforms[e.name]=c(e.type,f),this.locations[e.name]=f;var h=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES);for(d=0;d<h;++d)e=a.getActiveAttrib(b,d),f=a.getAttribLocation(b,e.name),this.locations[e.name]=f;return this},assignLocations:function(a){for(var b in a.attributes)b in this.locations&&(a.attributes[b].location=this.locations[b])},use:function(a){this.gl.useProgram(this.handle);if(a)for(var b in a)b in this.uniforms&&this.uniforms[b](a[b])},dispose:function(){this.gl.deleteShader(this.shader_vert),this.gl.deleteShader(this.shader_frag),this.gl.deleteProgram(this.handle)}},d}),define("embr/core/Texture",[],function(){function a(a){this.gl=a,this.handle=a.createTexture()}return"use strict",a.prototype={dispose:function(){this.gl.deleteTexture(this.handle)},updateFormat:function(a){var b=this.gl;typeof a!="object"&&(a={}),this.target=a.target||b.TEXTURE_2D,this.format=a.format||b.RGBA,this.formati=a.formati||b.RGBA,this.type=a.type||b.UNSIGNED_BYTE,this.filter_min=a.filter_min||b.NEAREST,this.filter_mag=a.filter_mag||b.NEAREST,this.wrap_s=a.wrap_s||b.CLAMP_TO_EDGE,this.wrap_t=a.wrap_t||b.CLAMP_TO_EDGE,this.unit=a.unit>=0?b.TEXTURE0+a.unit:b.TEXTURE0,b.bindTexture(this.target,this.handle),b.texParameteri(this.target,b.TEXTURE_MIN_FILTER,this.filter_min),b.texParameteri(this.target,b.TEXTURE_MAG_FILTER,this.filter_mag),b.texParameteri(this.target,b.TEXTURE_WRAP_S,this.wrap_s),b.texParameteri(this.target,b.TEXTURE_WRAP_T,this.wrap_t)},setDataWithElement:function(a,b){var c=this.gl;this.updateFormat(b),c.texImage2D(this.target,0,this.formati,this.format,this.type,a)},setData:function(a,b,c,d){var e=this.gl;this.width=a,this.height=b,this.updateFormat(d),e.texImage2D(this.target,0,this.formati,a,b,0,this.format,this.type,c)},updateData:function(a){var b=this.gl;b.bindTexture(this.target,this.handle),b.texSubImage2D(this.target,0,0,0,this.width,this.height,this.format,this.type,a)},bind:function(a){var b=this.gl;a!==undefined&&(this.unit=b.TEXTURE0+a),b.activeTexture(this.unit),b.bindTexture(this.target,this.handle)},unbind:function(){var a=this.gl;a.activeTexture(this.unit),a.bindTexture(this.target,null)}},a}),define("embr/core/Vbo",["embr/core/Util"],function(a){function b(a,b,c,d){this.gl=a,this.type=b,this.usage=c,this.attributes={},d&&this.update(d)}return"use strict",b.prototype={dispose:function(){var a=this.gl;for(var b=attributes.length;--b>=0;)a.deleteBuffer(attributes[b])},update:function(a){var b,c,d,e=this.gl;for(var f in a)f in this.attributes||(this.attributes[f]={buffer:e.createBuffer()}),c=a[f],b=this.attributes[f],b.target=c.target||b.target||(f==="index"?e.ELEMENT_ARRAY_BUFFER:e.ARRAY_BUFFER),b.size=c.size||b.size||1,b.location=c.location!==undefined?c.location:b.location!==undefined?b.location:-1,d=c.data,d&&(b.length=Math.floor(d.length/b.size),b.target!==e.ELEMENT_ARRAY_BUFFER||d instanceof Uint16Array?d instanceof Float32Array||(d=new Float32Array(d)):d=new Uint16Array(d),e.bindBuffer(b.target,b.buffer),e.bufferData(b.target,d,this.usage));if(!this.attributes.index){this.length=Number.MAX_VALUE;for(var f in this.attributes)this.length=Math.min(this.length,this.attributes[f].length)}},draw:function(a){var b=this.gl;a&&(a.assignLocations(this),a.use());for(var c in this.attributes){var d=this.attributes[c];d.target===b.ARRAY_BUFFER&&d.location>=0&&(b.bindBuffer(d.target,d.buffer),b.vertexAttribPointer(d.location,d.size,b.FLOAT,!1,0,0),b.enableVertexAttribArray(d.location))}var e=this.attributes.index;e?(b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,e.buffer),b.drawElements(this.type,e.length,b.UNSIGNED_SHORT,0)):b.drawArrays(this.type,0,this.length)}},b.createPlane=function(a,c,d,e,f){var g=[c,d,0,c,f,0,e,d,0,e,f,0],h=[0,0,0,1,1,0,1,1];return new b(a,a.TRIANGLE_STRIP,a.STATIC_DRAW,{position:{data:g,size:3},texcoord:{data:h,size:2}})},b.createBox=function(a,c,d,e){var f=[c,d,e,c,-d,e,c,-d,-e,c,d,-e,c,d,e,c,d,-e,-c,d,-e,-c,d,e,c,d,e,-c,d,e,-c,-d,e,c,-d,e,-c,d,e,-c,d,-e,-c,-d,-e,-c,-d,e,-c,-d,-e,c,-d,-e,c,-d,e,-c,-d,e,c,-d,-e,-c,-d,-e,-c,d,-e,c,d,-e],g=[1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1],h=[0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1],i=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];return new b(a,a.TRIANGLES,a.STATIC_DRAW,{position:{data:f,size:3},normal:{data:g,size:3},texcoord:{data:h,size:2},index:{data:i}})},b}),define("embr/core/Fbo",[],function(){function a(a,b,c,d){this.gl=a,this.width=b,this.height=c,this.tex_attachments=[],this.render_attachments=[],this.handle=a.createFramebuffer(),a.bindFramebuffer(a.FRAMEBUFFER,this.handle);for(var e=0,f=d.length,g=0;e<f;e++){var h=d[e],i=h.target||a.TEXTURE_2D,j=h.formati||a.RGBA,k=h.attach||a.COLOR_ATTACHMENT0+g++;if(i==a.RENDERBUFFER){var l=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,l),a.renderbufferStorage(i,j,b,c),a.framebufferRenderbuffer(a.FRAMEBUFFER,k,i,l),this.render_attachments.push({handle:l})}else{var m=h.format||a.RGBA,n=h.type||a.UNSIGNED_BYTE,o=h.filter_min||a.NEAREST,p=h.filter_mag||a.NEAREST,q=h.wrap_s||a.CLAMP_TO_EDGE,r=h.wrap_t||a.CLAMP_TO_EDGE,s=a.createTexture();a.bindTexture(i,s),a.texImage2D(i,0,j,b,c,0,m,n,null),a.texParameteri(i,a.TEXTURE_MIN_FILTER,o),a.texParameteri(i,a.TEXTURE_MAG_FILTER,p),a.texParameteri(i,a.TEXTURE_WRAP_S,q),a.texParameteri(i,a.TEXTURE_WRAP_T,r),a.framebufferTexture2D(a.FRAMEBUFFER,k,i,s,0),this.tex_attachments.push({handle:s,target:i,unit:a.TEXTURE0})}}if(a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE)throw"Incomplete frame buffer object.";a.bindFramebuffer(a.FRAMEBUFFER,null)}return"use strict",a.prototype={bind:function(){var a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,this.handle)},unbind:function(){var a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,null)},bindTexture:function(a,b){var c=this.gl,d=this.tex_attachments[a];b!==undefined&&(d.unit=c.TEXTURE0+b),c.activeTexture(d.unit),c.bindTexture(d.target,d.handle)},unbindTexture:function(a){var b=this.gl,c=this.tex_attachments[a];b.activeTexture(c.unit),b.bindTexture(c.target,null)}},a}),define("embr/core/PingPong",["embr/core/Fbo"],function(a){function b(b,c,d,e){this.wbuffer=new a(b,c,d,e),this.rbuffer=new a(b,c,d,e),this.swap()}return"use strict",b.prototype={swap:function(){var a=this.wbuffer;this.wbuffer=this.rbuffer,this.rbuffer=a},bind:function(){this.wbuffer.bind()},unbind:function(){this.wbuffer.unbind()},bindTexture:function(){this.rbuffer.bindTexture.apply(this.rbuffer,arguments)},unbindTexture:function(){this.rbuffer.unbindTexture.apply(this.rbuffer,arguments)}},b}),define("embr/core",["embr/core/Math","embr/core/Util","embr/core/Vec2","embr/core/Vec3","embr/core/Vec4","embr/core/Mat4","embr/core/Quat","embr/core/Program","embr/core/Texture","embr/core/Vbo","embr/core/Fbo","embr/core/PingPong"],function(a,b,c,d,e,f,g,h,i,j,k,l){return{math:a,util:b,Vec2:c,Vec3:d,Vec4:e,Mat4:f,Quat:g,Program:h,Texture:i,Vbo:j,Fbo:k,PingPong:l}}),define("embr/material/Material",["embr/core/Util","embr/core/Program"],function(a,b){function c(a,c,d,e){b.call(this,a);if(e&&e.flags){var f="";for(var g in e.flags)e.flags[g]&&(f+="#define "+g+"\n");c=f+c,d=f+d}this.compile(c,d),this.link(),this.attribute_locations={};if(e&&e.attributes){var h;for(var i in e.attributes)h=e.attributes[i],h in this.locations&&(this.attribute_locations[i]=this.locations[h])}}return"use strict",a.extend(b,c),c.prototype.assignLocations=function(a){for(var b in a.attributes)b in this.attribute_locations?a.attributes[b].location=this.attribute_locations[b]:a.attributes[b].location=-1},c}),define("embr/material/ColorMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview, projection;","attribute vec3 a_position;","#ifdef use_vertex_color","attribute vec4 a_color;","varying vec4 v_color;","#endif","#ifdef use_texture","attribute vec2 a_texcoord;","varying vec2 v_texcoord;","#endif","void main(){","#ifdef use_vertex_color","v_color = a_color;","#endif","#ifdef use_texture","v_texcoord = a_texcoord;","#endif","gl_Position = projection * modelview * vec4(a_position, 1.0);","}"].join("\n"),d=["uniform vec4 color;","#ifdef use_vertex_color","varying vec4 v_color;","#endif","#ifdef use_texture","uniform sampler2D texture;","varying vec2 v_texcoord;","#endif","void main(){","vec4 c = color;","#ifdef use_vertex_color","c *= v_color;","#endif","#ifdef use_texture","c *= texture2D(texture, v_texcoord);","#endif","gl_FragColor = c;","}"].join("\n"),e={attributes:{position:"a_position",texcoord:"a_texcoord",color:"a_color"},flags:{use_vertex_color:!1,use_texture:!1}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material/NormalMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview, projection;","attribute vec3 a_position;","attribute vec3 a_normal;","varying vec4 v_color;","void main(){","vec4 normal = modelview * vec4(a_normal, 0.0);","v_color = vec4((normal.xyz + 1.0) * 0.5, 1.0);","gl_Position = projection * modelview * vec4(a_position, 1.0);","}"].join("\n"),d=["varying vec4 v_color;","void main(){","gl_FragColor = v_color;","}"].join("\n"),e={attributes:{position:"a_position",normal:"a_normal"}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material/LambertMaterial",["embr/core/Util","embr/material/Material"],function(a,b){"use strict";var c=["uniform mat4 modelview_matrix, projection_matrix;","uniform mat3 normal_matrix;","attribute vec3 a_position;","attribute vec3 a_normal;","varying vec3 v_normal;","void main(){","v_normal = normal_matrix * a_normal;","gl_Position = projection_matrix * modelview_matrix * vec4(a_position, 1.0);","}"].join("\n"),d=["uniform vec3 light_direction;","uniform vec4 ambient_color, diffuse_color;","varying vec3 v_normal;","void main(){","float i = clamp(dot(light_direction, normalize(v_normal)), 0.0, 1.0);","gl_FragColor = ambient_color;","gl_FragColor += diffuse_color * i;","}"].join("\n"),e={attributes:{position:"a_position",normal:"a_normal"},flags:{use_vertex_color:!1}};return a.extend(b,function(g,h){h=a.mergeOptions(e,h),b.call(this,g,c,d,h)})}),define("embr/material",["embr/material/Material","embr/material/ColorMaterial","embr/material/NormalMaterial","embr/material/LambertMaterial"],function(a,b,c,d){return{Material:a,ColorMaterial:b,NormalMaterial:c,LambertMaterial:d}}),define("event",[],function(){function b(a,b,c,d){function e(f){d&&b.forEach(function(b){a.removeEventListener(b,e)}),c(f)}b.forEach(function(b){a.addEventListener(b,e)})}"use strict";var a=["webkitTransitionEnd","transitionend","MSTransitionEnd","oTransitionEnd"];return{addMultiEventListener:b,addTransitionEndListener:function(c,d,e){b(c,a,d,e)}}});if(!Worker)var Worker=function(a){var b,c={};return typeof window!="undefined"?b=window:global&&(b=global),b.document&&!b.require&&(b.require=function(a){var b=document.createElement("script");b.type="text/javascript",b.src=a,document.getElementsByTagName("head")[0].appendChild(b)}),c.onmessage=function(){},c.postMessage=function(a){setTimeout(function(){b.onmessage({data:a})},10)},b.postMessage=function(a){c.onmessage({data:a,type:"message"})},require(a),c};this.LZMA=function(a){var b=1,c=2,d=3,e={},f=new Worker(typeof a=="undefined"?"./lzma_worker.js":a);return f.onmessage=function(a){a.data.action===d?e[a.data.callback_num]&&typeof e[a.data.callback_num].on_progress=="function"&&e[a.data.callback_num].on_progress(a.data.result):e[a.data.callback_num]&&typeof e[a.data.callback_num].on_finish=="function"&&(e[a.data.callback_num].on_finish(a.data.result),delete e[a.data.callback_num])},f.onerror=function(a){throw new Error(a.message+" ("+a.filename+":"+a.lineno+")")},function(){function a(a,b,c,d,g){var h;do h=Math.floor(Math.random()*1e7);while(typeof e[h]!="undefined");e[h]={on_finish:d,on_progress:g},f.postMessage({action:a,callback_num:h,data:b,mode:c})}return{compress:function(c,d,e,f){a(b,String(c),d,e,f)},decompress:function(b,d,e){a(c,b,!1,d,e)}}}()},define("lib/lzma/lzma",function(){}),define("params",["lib/lzma/lzma"],function(){function b(b){var c,d={};while((c=a.exec(b))!=null)d[c[1]]=c[2].indexOf(",")===-1?c[2]:c[2].split(",");return d}function c(a){var b=[];for(var c in a)b.push(c+"="+(a[c]instanceof Array?a[c].join(","):a[c]));return b.join("&")}function e(a){var b,c=[];for(var d=0;d<a.length;d+=2)b=a.substring(d,d+2),c.push(parseInt(b,16));return c}function f(a){var b,c="";for(var d=0,e=a.length;d<e;++d)a[d]<0&&(a[d]+=256),b=a[d].toString(16),b.length==1&&(b="0"+b),c+=b;return c}"use strict";var a=/[#&]([\w\-\.,]+)=([\w\-\.,]+)/g,d=LZMA?new LZMA("lib/lzma/lzma_worker.js"):null;return{lzmaCompress:function(a,b,c){d&&d.compress(a,b,function(a){c(f(a))})},lzmaDecompress:function(a,b){d&&d.decompress(e(a),b)},saveUrlHash:function(a){document.location.hash=c(a)},loadUrlHash:function(a){var c=b(document.location.hash);for(var d in c)d in a&&a[d](c[d])}}}),define("selector",[],function(){function a(a,e,f){var g=b(a);if(!isNaN(g.text)&&g.text!==""){var h=null,i=g.text.split(".");if(i.length===1)h=Math.round(parseInt(i[0])+e).toString();else if(i.length===2){var j=i[1].length;h=(parseFloat(g.text)+e).toFixed(j)}h!==null&&(c(a,h),d(a,g.start,g.start+h.length),f())}}function b(a){var b=a.selectionEnd-a.selectionStart;return{start:a.selectionStart,end:a.selectionEnd,length:b,text:a.value.substr(a.selectionStart,b)}}function c(a,c){var e=b(a),f=e.start,g=f+c.length;return a.value=a.value.substr(0,f)+c+a.value.substr(e.end,a.value.length),d(a,f,g),{start:f,end:g,length:c.length,text:c}}function d(a,c,d){return a.focus(),a.selectionStart=c,a.selectionEnd=d,b(a)}return"use strict",{scrollNumber:a,getSelection:b,replaceSelection:c,setSelection:d}}),require.config({paths:{embr:"lib/embr/src"}}),require(["embr/core","embr/material","event","params","selector"],function(a,b,c,d,e){function g(){function i(d){h=d,b.setAttribute("class",d?"open":"shut"),d?(a.style.visibility="visible",g.style.display="block",g.style.opacity="1",a.classList.remove("shut")):(c.addTransitionEndListener(a,function(b){a.style.visibility="hidden"},!0),a.classList.add("shut"),c.addTransitionEndListener(g,function(a){g.style.display="none"},!0),g.style.opacity="0")}function j(){d.lzmaCompress(f.value.trim(),1,function(a){d.saveUrlHash({fs:a})})}var a=document.getElementById("code"),b=document.getElementById("code-toggle"),g=document.getElementById("code-save"),h=!1;b.addEventListener("click",function(a){i(!h)},!1),g.addEventListener("click",j,!1),f.addEventListener("keydown",function(a){a.stopPropagation();if(a.keyCode==9){a.preventDefault();var b=f.selectionStart,c=f.selectionEnd;f.value=f.value.substring(0,b)+"  "+f.value.substring(c,f.value.length),f.selectionStart=f.selectionEnd=b+2,f.focus()}},!1),f.addEventListener("keyup",function(a){a.stopPropagation();if(a.keyCode==37||a.keyCode==38||a.keyCode==39||a.keyCode==40)return;E()},!1),f.addEventListener("keypress",function(a){a.stopPropagation()},!1),f.addEventListener("mousewheel",function(a){e.scrollNumber(f,a.wheelDelta/40,function(){a.stopPropagation(),a.preventDefault(),E()})},!1),document.addEventListener("dragover",function(a){a.stopPropagation(),a.preventDefault()},!1),document.addEventListener("drop",function(a){a.stopPropagation(),a.preventDefault(),r(a.dataTransfer.files[0],t)},!1),i(!0)}function j(a){i.set(a.clientX/v.clientWidth,1-a.clientY/v.clientHeight)}function k(a){a!=h&&(h=a,a?document.addEventListener("mousemove",j):document.removeEventListener("mousemove",j))}function p(a,b){try{var c=l.createBuffer(a,!0);b(c)}catch(d){console.log(d)}}function q(a,b){var c=new XMLHttpRequest;c.open("GET",a,!0),c.responseType="arraybuffer",c.onload=function(){p(c.response,b)},c.send()}function r(a,b){var c=new FileReader;c.onload=function(){p(c.result,b)},c.readAsArrayBuffer(a)}function s(){l=new webkitAudioContext,m=l.createBufferSource(),n=l.createAnalyser(),n.fftSize=512,n.smoothingTimeConstant=.5,m.connect(n),n.connect(l.destination),u()}function t(a){m.buffer=a,m.loop=!0,m.noteOn(0)}function u(){o=new Uint8Array(n.frequencyBinCount),z.setData(n.frequencyBinCount,1,o,{format:x.LUMINANCE,formati:x.LUMINANCE})}function D(a,b){var c,d,e,f;while(c=C.exec(a))for(d=1;d<c.length;d+=2)e=c[d].toLowerCase(),f=+c[d+1],!isNaN(f)&&b[e]&&b[e](f)}function E(){try{var b=f.value.trim();D(b,{smoothing:function(b){n.smoothingTimeConstant=a.math.clamp(b,0,1)},num_bands:function(b){a.math.isPow2(b)&&(n.fftSize=b*2,u())},pixel_scale:function(a){Math.floor(a)==a&&(w=a,H())}}),y.compile(B,b),y.link(),y.assignLocations(A),k(!!y.uniforms.u_mouse),f.classList.remove("error"),console.log("Compile Successful!")}catch(c){f.classList.add("error"),console.error("Error compiling shader: "+c)}}function F(){try{x=v.getContext("experimental-webgl")}catch(b){console.error(b)}A=a.Vbo.createPlane(x,-1,-1,1,1),y=new a.Program(x),z=new a.Texture(x)}function G(){x.viewport(0,0,v.width,v.height),window.requestAnimationFrame(G),n.getByteFrequencyData(o),z.bind(),z.updateData(o),y.use({u_frequencies:0,u_aspect:v.width/v.height,u_mouse:i,u_time:(Date.now()-I)/1e3}),A.draw()}function H(){v.width=Math.floor(v.clientWidth/w),v.height=Math.floor(v.clientHeight/w)}var f=document.getElementById("code-text"),h=!1,i=new a.Vec2(0,0),l,m,n,o,v=document.getElementById("canvas"),w=2,x,y,z,A,B=["attribute vec3 position;","attribute vec2 texcoord;","varying vec2 v_texcoord;","void main(){","v_texcoord = texcoord;","gl_Position = vec4(position, 1.);","}"].join("\n"),C=/^[ \t]*#define[ \t]+([\w_]*)[ \t]+([\d\.\d]+)/gm;window.addEventListener("resize",H,!1),g(),F(),s(),H(),E();var I=Date.now();d.loadUrlHash({fs:function(a){d.lzmaDecompress(a,function(a){console.log(a),f.value=a,E()})}}),window.requestAnimationFrame(G)}),define("main",function(){})