# Sass

## Variable syntax

: `$variable_name: value;`

## Variable scope

Sass 변수는 오직 그들을 정의했던 네스팅 레벨에서 이용 가능.
Sass variables are only available at the `level of nesting` where they are defined.

`!global`은 변수가 gloabl이라는 것을 지칭. 모든 레벨에서 이용할 수 있음.
`!global` indicates that a variable is global, which means that it is accessible on all levels.

`Sass Nested Properties`: ':'

## Import file

`@import "filename";`

## Import partial file

곧바로 Transfile하지 않고, Sass 안에 부분으로써 불러오는 방법.  
변수 모음용으로 쓰는 것이 적절.

filename: `_filename.scss`
`@import "filename";`

## Mixin

CSS 코드를 재사용하는 방법.

Mixin에서 Hyphens(-)와 Underscore(\_)는 같은 것으로 취급. (ex: @mixin mixin_name = @minxin mixin-name)

Syntax

```scss
@mixin mixin-name { ...css code }

selector {
  @include mixin-name;
}

or
@mixin mixin-name($variable, $variable, ...) { ...css code }

selector {
  @include mixin-name(value, value);3
}

or
(변경시킬 값만 지정할 필요가 있다면,)
@mixin mixin-name($color: blue, $width: 1px) { ...css code }

selector {
  @include mixin-name($color: red);
}
```

## Using a Mixin For Vendor Prefixes

프로퍼티도 매개변수로 사용할 수 있으므로 Vendor Prefix로서 전달하여 코드 사용량을 줄임.

```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.myBox {
  @include transform(rotate(20deg));
}
```

## Directive: `@extend`

한 셀렉터에 있는 CSS 프로퍼티 집합을 다른 셀럭터에 공유  
일부 작은 세부 프로퍼티만 다른 거의 동일한 스타일의 요소가 있는 경우 유용

Mixin는 연관성 없는 선택자의 중복 코드 제거.
Extend는 선택자 간의 연관성 있는 규칙을 만들기 위해 사용.
%placeholder는 불필요한 선택자가 생기는 것을 막음.
